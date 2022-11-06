import urllib
import urllib.request
import urllib.parse
import json
import datetime
import time
import pprint 
import pandas as pd

responses = []

dt1 = datetime.datetime(2021, 1, 1) # range -> 2022 july 4 - 10
dt2 = dt1 + datetime.timedelta(days=31+28+31)
dt1str = dt1.strftime("%Y-%m-%d") # 2022-07-07T00:00:00.000Z    
dt2str = dt2.strftime("%Y-%m-%d") 

try:
    url = "https://helsinki-openapi.nuuka.cloud/api/v1.0/EnergyData/Hourly/ListByProperty?Record=LocationName&SearchString=1000%20Hakaniemen%20kauppahalli&ReportingGroup=Electricity&StartTime="+dt1str+"T00:00:00.000Z&EndTime="+dt2str+"T00:00:00.000Z"
    request = urllib.request.urlopen(url)
    response = request.read()
    json_data = json.loads(response)
except Exception(e):
    print(e)

df = pd.DataFrame(json_data)

df.to_csv("2021-jan-mar_energydata.csv")