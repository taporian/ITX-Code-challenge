# ITX-Code-challenge

Railway Stations Query using Overpass API
This Node.js script is designed to query railway stations in Germany using the Overpass API and save the data to a JSON file.

Installation
Before running the script, ensure you have Node.js installed on your machine. To install project dependencies, navigate to the project directory and run:

bash

# Copy code

`npm install`

Usage
To execute the script and perform the Overpass API query for railway stations in Germany, use the following command:

bash

# Copy code

`npm start`

This command will start the script, which sends a request to the Overpass API, retrieves data for railway stations within the administrative boundaries of Germany, and saves the information to a JSON file.

# Description

The script queries to search for railway stations in Germany. It looks for nodes (points), ways (lines), and relations (groupings) tagged as railway stations.
