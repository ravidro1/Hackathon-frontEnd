import React, {useState} from "react";
import DoughnutChart from "../Components/Charts/DoughnutChart";
import "../Style/loginPage.css";

function LoginPage({}) {
  const [ddata] = useState([
    {
      name: "obj1",
      value: 4,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      name: "obj2",
      value: 15,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
    {
      name: "obj3",
      value: 8,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
  ]);

  return (
    <div className="main-LoginPage">
      <DoughnutChart
        label={"label"}
        arrayOfObject={ddata}
        middelText={"Hey"}
        middelTextfontSize={"30px"}
        width={"400px"}
        height={"400px"}
      />
    </div>
  );
}

export default LoginPage;
