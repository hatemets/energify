import urllib
import urllib.request
import urllib.parse
import json
import pprint
import pandas as pd
import datetime
from dotenv import load_dotenv
config = dotenv_values(".env")

client_secret = config["CLIENT_SECRET"]
client_id = config["CLIENT_ID"]

days = []

dt = datetime.datetime(2022, 6, 1) # 01/06/2022 00:00
nofDays = 150

for i in range(1, nofDays):
	day = dt.strftime("%d")
	month = dt.strftime("%m")
	year = dt.strftime("%Y")
	print(f"{str(i)}: {year}-{month}-{day}")
	request = urllib.request.urlopen('https://api.aerisapi.com/conditions/helsinki,fi?format=json&from='+year+'-'+month+'-'+day+'%2000:00:00&to='+year+'-'+month+'-'+day+'%2023:59:59&plimit=160&filter=1hr&&client_id=' + client_id + '&client_secret=' + client_secret)
	response = request.read()
	data = json.loads(response)
	if data['success']:
		days.append(data)
	else:
		print("An error occurred: %s" % (data['error']['description']))
		request.close()
	dt = dt + datetime.timedelta(days=1)

responses = list(map(lambda x: x["response"], days))
periods = list(map(lambda x: x[0]["periods"], responses))
flat_list = [day for month in periods for day in month]

for p in flat_list:
	if "solrad" in p.keys() and p["solrad"] != None:
		solkeys = p["solrad"].keys()
		for k in solkeys:
			p["solrad_" + k] = p["solrad"][k]
		p["solrad"] = None

df = pd.DataFrame(flat_list)

df.to_csv("2022-jun-oct_vaisala.csv")