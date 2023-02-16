import React from "react";
import {useEffect} from "react";
import DoughnutChart from "./DoughnutChart";

function NumberCharts({chartType, filterKey, key, table}) {
  const getAvg = (arrayOfNum) => {
    let sum = 0;
    arrayOfNum.forEach((num) => {
      sum += num;
    });

    return sum / arrayOfNum.length;
  };

  //   const tempValue = {
  //     labels: [],
  //     datasets: [
  //       {
  //         label: label,
  //         data: [],
  //         backgroundColor: [],
  //         borderColor: [],
  //         borderWidth: 1,
  //         cutout: "65%",
  //         // hoverOffset: 30,
  //         hoverOffset: 0,



  return (
    <div>
      {/* percentagesPie */}
      {/* {chartType == "percentagesPie" &&      <DoughnutChart label={"label"} arrayOfObject={}  middelText={""}  middelTextfontSize="30%" width={"50%"} height={"50%"}  backgroundColor={"green"}/>}   */}
    </div>
  );
}

export default NumberCharts;
