import React, { useContext, useEffect, useState } from "react";
import AddTable from "../components/DefineDataTypes";
import BarChart from "../components/Charts/BarChart";
import DoughnutChart from "../components/Charts/DoughnutChart";
import "../Style/dashBoardPage.css";
import NavBar from "../components/NavBar";
import ChooseFilterChart from "../components/Charts/ChooseFilterChart";

function DashBoardPage(props) {

  const { FileTable, setFileTable, userExcelCollection, setUserExcelCollection, setCurrentExcel, currentExcel, setExcelDataType } = useContext(Context)
  function setArr(obj) {
    console.log(Object.entries(obj));
    let arr = [];
    // Object.entries(obj).forEach((e) => {
    //   arr.push({ name: e[0], value: e[1] });
    // });
    console.log(arr);
    return arr;
  }
  function calculateSum(array, property) {
    let arr = {};
    console.log(FileTable);
    array.forEach((ele) => {
      arr[ele[property]] = (arr[ele[property]] || 0) + 1;
      // arr["value"] = (arr["value"] || 0) + 1
    });
    console.log(arr);
    return arr;
  }

  // function theCountToArr(array, property) {
  //   // const objSum = calculateSum(array, property)
  //   const count = setArr(calculateSum(array, property));
  //   console.log(count);
  // }

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
    <div className="main-DashBoard">
      <NavBar />

      {/* {console.log(userExcelCollection)} */}
      <div>
        {userExcelCollection?.map((excel, index) => {
          return (
            <button
              key={index}
              onClick={() => {

                setFileTable(excel.excel_structure);

                setExcelDataType(excel.excel_dataTypes)
                setCurrentExcel(excel)
              }}
            >
              {excel.name}
            </button>
          );
        })}
      </div>
      <button onClick={() => { theCountToArr(FileTable, "שם") }}>aaaaaa</button>
      <NavBar />

      {/* <DoughnutChart
        label={"label"}
        arrayOfObject={ddata}
        middelText={"Hey"}
        middelTextfontSize={"30px"}
        width={"400px"}
        height={"400px"}
        backgroundColor={"rgba(244,65,12, 0.5)"}
      /> */}
      {/* <BarChart
        label={"label"}
        arrayOfObject={ddata}
        headLineText={"Hey"}
        headLineTextfontSize={"30px"}
        width={"400px"}
        height={"400px"}
        backgroundColor={"rgba(244,65,12, 0.5)"}
      /> */}

      {/* <ChooseFilterChart /> */}
    </div >
  );
}

export default DashBoardPage;
