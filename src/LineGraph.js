import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState({});

  const buildChartData = (data, casesTypes = "cases") => {
    const chartData = [];
    let lastDataPoint;

    data[casesTypes].forEach((date) => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesTypes][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesTypes][date];
    });
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data);
      });
  });

  return <div>{/*<Line data options />*/}</div>;
}

export default LineGraph;
