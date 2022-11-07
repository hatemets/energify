# Energy conservation app for everyday users
### Junction 2022 Sustainable Future challenge winner project

This product is perfect for conserving energy and monitor your electric devices from one place. The app is built with React. To run the app on your platform, please follow the instruction below.
The app can be visited using the following links:
- https://junction-energify.netlify.app/
- https://energify.miettinen.dev/

# Introduction

## What?
Energify is an optimizing solution to real-time energy consumption patterns and waste. We seek to lower users' emissions, bills, and stigma toward clean and renewable energy by providing solutions based on consumer habits.

## Why?
As the world moves further into the digital age, our usage of appliances has reached a wasteful amount; almost 40% of the energy produced in the world is released as waste. As a group, we looked into many ways of reducing this figure and how our technical backgrounds could guide us with it. Having experience with electrical appliances before, as well as the opportunities for real-world implementation it provides, we aimed to provide a hardware solution that can be used in collaboration with our application to reduce energy consumption. 

## How?
Using a ZigBee and smart plug provided by BCG, with Bluetooth for range detection, we were able to create a proximity-triggered smart lighting fixture to demonstrate a use case of how hardware could be used in the optimization of energy saving. This demo also promises a great future as it can easily be extended to other use cases. For instance, through the ZigBee module, different home appliances can be easily accessed and controlled. Furthermore, the implementation of cheap yet efficient electronics such as LoRa for longer distances and ESP for room switching detection would allow diverse and reliable communication improving the automation for the strategic energy cuts.  

## Tech.
On our software side, we used data science to drive our analysis from provided datasets of when energy is most consumed and most costly. From this data, we deduce and suggest optimal energy usage (for example, when to turn on and off appliances based on sleep patterns). We also look to provide remote control of appliances through the application and our electrical hardware usage. In addition to all of this, Energify looks to quantify for the average person how much energy they saved (both in terms of money and #trees saved), and finally include an interest-piquing solution in the sense of competing with your friends in a leaderboard-style page.

## Future.
As we look into the future implementations of this application, the potential use cases and dataset usages are exciting. Using different datasets, more learned predictions as well as implementing longer ranges and more reliable hardware solutions, we can make tomorrow greener than today.

# This repo

`./` root of this directory is a React app, with a visualization of our product.

`./data_analysis` directory contains Python scripts for downloading data sets and analyzing them with pandas. The data sets include weather data, electricity usage data, and other relevant data that was of interest to us.

`./presence_detection` directory contains information on how our presence detection feature works using ZigBee, Bluetooth and Python.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
