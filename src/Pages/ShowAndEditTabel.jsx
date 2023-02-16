import React, { useContext, useEffect, useState } from "react";

import AddTabel from "../components/AddTabel";
import ExcelTable from "../components/ExcelTable";
import AddToTable from "./AddToTable";
import NavBar from "../components/NavBar";
import "./edit-xl.css"
import { Context } from "../App";

function ShowAndEditTabel(props) {
  const { currentExcel } = useContext(Context)
  const [showExcle, setShowExcle] = useState(false)
  useEffect(() => {
    if (currentExcel?._id) {
      console.log(currentExcel?._id);
      setShowExcle(true)
    }
  }, [])

  return (
    <div>
      {/* <NavBar /> */}
      {showExcle
        ?
        <ExcelTable setShowExcle={setShowExcle} /> :
        <AddTabel setShowExcle={setShowExcle} />
      }
      {/* <AddToTable /> */}
    </div>
  );
}

export default ShowAndEditTabel;
