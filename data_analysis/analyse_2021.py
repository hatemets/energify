import pandas as pd
import numpy as np
import json
import pprint

vaisala = pd.read_csv("2021-jan-mar_vaisala.csv")
energy = pd.read_csv("2021-jan-mar_energydata.csv")

vaisala.keys()
vaisala
energy.keys()
energy

vaisala["timestamp"] = vaisala["dateTimeISO"].map(lambda x: x[0:len("2021-01-01T00:00:00")])

vaisala.timestamp

vaisala.timestamp = vaisala.timestamp.astype(str)
energy.timestamp = energy.timestamp.astype(str)
vaisala.timestamp
energy.timestamp

df = pd.merge(vaisala, energy, left_on="timestamp", right_on='timestamp')
df["energy_usage_kwh"] = energy.value
df.keys()
cleaned = df[['timestamp', 'tempC', 'dewpointC', 'humidity',
       'windSpeedKPH', 'weather', 'feelslikeC', 'energy_usage_kwh']]

df.weather.unique()

features = df[['tempC', 'dewpointC', 'humidity',
       'windSpeedKPH', 'weather', 'feelslikeC', 'energy_usage_kwh']]
def map_weather_string(weather_str):
    if weather_str == 'Sunny': return 1
    if weather_str == 'Clear': return 0.7
    if weather_str == 'Mostly Sunny': return 0.4
    if weather_str == 'Mostly Clear': return 0.2
    if weather_str == 'Partly Cloudy': return 0.1
    if weather_str == 'Mostly Cloudy': return 0.0
    if weather_str == 'Freezing Drizzle': return -0.1
    if weather_str == 'Rain Showers': return -0.2
    if weather_str == 'Light Snow': return -0.3
    if weather_str == 'Isolated Showers': return -0.4
    if weather_str == 'Snow Showers': return -0.5
    if weather_str == 'Snow': return -0.6
    if weather_str == 'Wintry Mix': return -0.7
    if weather_str == 'Sleet/Snow': return -0.8
    if weather_str == 'Cloudy': return -1
features['weather'] = df['weather'].map(lambda x: map_weather_string(x))

features

features.corr().abs()