import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArr);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
