import './App.css';
import React from 'react';
import {FormControl, Select, MenuItem, } from '@material-ui/core'

function App() {
  return (
    <div className="app">
			{/* ---------- Header ---------- */}
			<div className="app__header">
				<h1>Covid-19 Tracker</h1>
				<FormControl className="app__dropdown">
					<Select variant="outlined" value="abc">
						<MenuItem value="worldwide">WorldWide</MenuItem>
						<MenuItem value="worldwide">Option 2</MenuItem>
						<MenuItem value="worldwide">Option 3</MenuItem>
						<MenuItem value="worldwide">Option 4</MenuItem>
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
