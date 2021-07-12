import "./App.css";
import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";

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
  return (
    <div className="app">
      {/* ---------- Header ---------- */}
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
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

      {/* ---------- Table ---------- */}

      {/* ---------- Graph ---------- */}

      {/* ---------- Map ---------- */}
    </div>
  );
}

export default App;
