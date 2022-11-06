import pandas as pd
import numpy as np
import json
import pprint
import seaborn as sns
from matplotlib import pyplot as plt
import dateutil.parser

# load and clean data
vaisala = pd.read_csv("2022-jun-oct_vaisala.csv").drop_duplicates(subset=["dateTimeISO"])
energy = pd.read_excel("2022-jun-oct_bcg.xlsx")

vaisala["timestamp"] = vaisala["dateTimeISO"].map(lambda x: x[0:len("2021-01-01T00")])
energy["Period"] = energy["Period"].astype(str)
energy["timestamp"] = energy["Period"].map(lambda x: x[0:len("2021-01-01T00")].replace(" ", "T"))

vaisala.timestamp
energy.timestamp

vaisala["date"] = vaisala.dateTimeISO.map(lambda x: dateutil.parser.isoparse(x))
vaisala["week"] = vaisala["date"].map(lambda x: x.week)
vaisala["day"] = vaisala["date"].map(lambda x: x.day)

df = pd.merge(vaisala, energy, left_on="timestamp", right_on='timestamp')
df["energy_usage_kwh"] = energy["Electricity consumption kWh"]
df.keys()

df.weather.unique()
df["hour"] = df["timestamp"].map(lambda x: int(x[-2:]))

features = df[['tempC', 'humidity', 'pressureMB', 'windSpeedKPH', 
       'precipMM', 'visibilityKM', 'sky', 'weather', 
       'solradWM2', 'uvi', 'isDay', 'spressureMB', 
       'solrad_azimuthDEG', 'solrad_zenithDEG', 'solrad_ghiWM2',
       'solrad_dniWM2', 'solrad_dhiWM2', 'energy_usage_kwh', "hour", "day", "week"]]
def map_weather_string(weather_str):
    if weather_str == 'Sunny': return 1
    if weather_str == 'Clear': return 1
    if weather_str == 'Mostly Sunny': return 0
    if weather_str == 'Mostly Clear': return 0
    if weather_str == 'Partly Cloudy': return 0
    if weather_str == 'Isolated Showers': return 0
    if weather_str == 'Mostly Cloudy': return 0
    if weather_str == 'Freezing Drizzle': return 0
    if weather_str == 'Light Snow': return 0
    if weather_str == 'Rain Showers': return 0
    if weather_str == 'Snow Showers': return 0
    if weather_str == 'Wintry Mix': return 0
    if weather_str == 'Sleet/Snow': return 0
    if weather_str == 'Snow': return 0
    if weather_str == 'Cloudy': return 0
def map_boolean(val):
    if val:
        return 1
    return 0

# visualize correlations
features['weather'] = df['weather'].map(lambda x: map_weather_string(x))
features['isDay'] = df['isDay'].map(lambda x: map_boolean(x))
corr = features.corr().abs()
plt.figure(figsize=(12,8))
sns.heatmap(corr, cmap="Greens",annot=True,  fmt=".1g")
plt.show()

# visualize correlations
features['weather'] = df['weather'].map(lambda x: map_weather_string(x))
features['isDay'] = df['isDay'].map(lambda x: map_boolean(x))
corr = features.corr().abs()
plt.figure(figsize=(12,8))
sns.heatmap(corr, cmap="Greens",annot=True,  fmt=".1g")
plt.show()

# visualize hourly mean
elec_by_hour = df[['hour', 'energy_usage_kwh']]
elec_by_hour = elec_by_hour.groupby('hour')['energy_usage_kwh'].mean()
elec_by_hour.plot()
plt.show()

# visualize weekly mean
df["week"] = vaisala["date"].map(lambda x: x.week)
elec_by_hour = df[['week', 'energy_usage_kwh']]
elec_by_hour = elec_by_hour.groupby('week')['energy_usage_kwh'].mean()
elec_by_hour.plot()
plt.show()

# visualize year day mean
df["dayofyear"] = vaisala["date"].map(lambda x: x.timetuple().tm_yday )
elec_by_hour = df[['dayofyear', 'energy_usage_kwh']]
elec_by_hour = elec_by_hour.groupby('dayofyear')['energy_usage_kwh'].sum()
elec_by_hour.plot()
plt.show()
