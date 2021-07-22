import "./App.css";
import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  //Use effect runs a peice of code in given condition
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United states of America, India, United Kingdom
            value: country.countryInfo.iso2, //like IND, USA, UK
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      {/* ---------- Header ---------- */}
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              {/* Loop through all the countires and show the drowdown */}
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
              {/* <MenuItem value="worldwide">WorldWide</MenuItem>
						<MenuItem value="worldwide">Option 2</MenuItem>
						<MenuItem value="worldwide">Option 3</MenuItem>
						<MenuItem value="worldwide">Option 4</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        {/* ----- Title + Select input dropdown field ----- */}

        {/* ---------- Info boxes * 3 ---------- */}
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" total={2000} cases={123} />
          <InfoBox title="Recovered" total={3000} cases={123} />
          <InfoBox title="Deaths" total={4000} cases={123} />
        </div>

        {/* ---------- Table ---------- */}

        {/* ---------- Graph ---------- */}

        {/* ---------- Map ---------- */}
        <Map />
      </div>
    </div>
  );
}

export default App;
