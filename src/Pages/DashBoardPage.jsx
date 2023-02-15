import React, { useState } from "react";
import AddTable from "../Components/DefineDataTypes";
import BarChart from "../Components/Charts/BarChart";
import DoughnutChart from "../Components/Charts/DoughnutChart";
import "../Style/dashBoardPage.css";
import NavBar from "../Components/NavBar";

function DashBoardPage(props) {
  const [ddata] = useState([
    {
      name: "obj1",
      value: 4,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      name: "obj2",
      value: 30,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
    {
      name: "obj3",
      value: 8,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
    {
      name: "obj4",
      value: 8,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
    {
      name: "obj5",
      value: 8,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
    {
      name: "obj6",
      value: 8,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
  ]);



  return (
    <div className="main-LoginPage">
      <NavBar />

      <DoughnutChart
        label={"label"}
        arrayOfObject={ddata}
        middelText={"Hey"}
        middelTextfontSize={"30px"}
        width={"400px"}
        height={"400px"}
        backgroundColor={"rgba(244,65,12, 0.5)"}
      />
      <BarChart
        label={"label"}
        arrayOfObject={ddata}
        headLineText={"Hey"}
        headLineTextfontSize={"30px"}
        width={"400px"}
        height={"400px"}
        backgroundColor={"rgba(244,65,12, 0.5)"}
      />
    </div>
  );
}

export default DashBoardPage;
