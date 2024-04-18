import express from "express";
import fetch from "node-fetch";
import { writeFile } from "fs/promises";

const app = express();
const port = 3000;
// NPM start
app.get("/", (req, res) => {
  res.send("Hello, ITX");
});

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  // filtered the query with specific area Germany
  // ISO information from https://en.wikipedia.org/wiki/ISO_3166-1
  // https://wiki.openstreetmap.org/wiki/Key:admin_level
  // following the documentation https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example#Find_newbies_mapping_railway_signals
  // way to get withing defined area
  // relation to group "way" with tags railway station
  const getRailwayStations = async () => {
    const overpassUrl = "http://overpass-api.de/api/interpreter";
    const overpassQuery = `[out:json];
    area["ISO3166-1"="DE"][admin_level=2];
    (
      node["railway"="station"](area);
      way["railway"="station"](area);
      relation["railway"="station"](area);
    );
    out body;`;

    try {
      const response = await fetch(overpassUrl, {
        method: "POST",
        body: overpassQuery,
      });
      const data = await response.json();
      // writing the data in a JSON file
      await writeFile("railway_stations.json", JSON.stringify(data, null, 2));
      console.log("data extracted");
    } catch (error) {
      console.log("error", error);
    }

    return true;
  };

  try {
    await getRailwayStations();
  } catch (error) {
    console.error("Error while getting railway stations:", error);
  }
});
