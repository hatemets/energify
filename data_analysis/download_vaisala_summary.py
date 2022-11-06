import urllib
import urllib.request
import urllib.parse
import json
import datetime
import time
from dotenv import load_dotenv
config = dotenv_values(".env")

client_secret = config["CLIENT_SECRET"]
client_id = config["CLIENT_ID"]

start = datetime.datetime(2022, 6, 1) # 01/06/2022 00:00

responses = []

dt = start # range -> 2022 july 4 - 10
for k in range(150):
    time.sleep(0.1)
    dtstr = dt.strftime("%Y-%m-%d %H-%M-%S").replace(" ", "%20") # 2020-05-09 13:46:00
    print(dtstr.replace("%20", " "))
    dt = dt + datetime.timedelta(hours=1)
    try:
        print("https://api.aerisapi.com/conditions/summary/helsinki,fi?for=" + dtstr + "&format=json&client_id=" + client_id + "&client_secret=" + client_secret)
        request = urllib.request.urlopen("https://api.aerisapi.com/conditions/summary/helsinki,fi?for=" + dtstr + "&format=json&client_id=" + client_id + "&client_secret=" + client_secret)
        response = request.read()
        json_data = json.loads(response)
        if json_data['success']:
            responses.append(json_data)
        else:
            print(json_data['error']['description'])
            request.close()
    except Exception(e):
        print(e)

def flatten_periods(response):
    new_dict = {}
    for key in pkeys:
        if type(periods[key]) == dict:
            for innerkey in periods[key].keys():
                inner_inner_value = periods[key][innerkey]
                if type(inner_inner_value) == dict:
                    for inner_inner_key in inner_inner_value.keys():
                        if "coded" not in inner_inner_key:
                            new_dict[key + "_" + inner_inner_key] = inner_inner_value[inner_inner_key]
                else:
                    if "coded" not in innerkey:
                        new_dict[key + "_" + innerkey] = inner_inner_value
        else:
            new_dict[key] = periods[key]
    return new_dict

flattened_periods = []

for i in range(len(responses)):
    periods = responses[i]["response"][0]["periods"][0]
    flattened_periods.append(flatten_periods(periods))

pprint.pprint(flattened_periods[0:10])

for p in flattened_periods: 
    if "dateTimeISO" in p.keys():
        print(p["dateTimeISO"])

df = pd.DataFrame(flattened_periods)

df.to_csv("vaisala.csv")