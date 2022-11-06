import requests
import sys
import os

import requests
import time
from subprocess import check_output

bluetoothID = 'AAA'
api_url = "http://192.168.56.1:80/api/330A8447D7/lights/1/state"


while 1:
    f = open("bluetooth_log.txt", "r")
    lines = f.readlines()
    f.close()
    targetInRange = False

    for i in range(len(lines)-1, 0, -1):
        line = lines[i].replace("\x00", "")
        if bluetoothID in line:
            if "Device Arrival" in line:
                targetInRange = True
                break
            if "Device Left" in line:
                targetInRange = False
                break

    if targetInRange:
        try:
            print("%s is in RANGE" % bluetoothID)
            requests.put(api_url, json={ "on": True })
            #here we will call REST API to turn on the Zigbee Device
        except Exception as e:
            print(e)
    else:
        try:
            print("%s is NOT in RANGE" % bluetoothID)
            requests.put(api_url, json={ "on": False })
            #here we will call REST API to turn OFF the Zigbee Device
        except Exception as e:
            print(e)

    time.sleep(0.1)  #wait 3 seconds between bluetooth searches if needed