import React, { useContext } from "react";
import { Context } from "../App";

import AddTabel from "../components/AddTabel";
import ExcelTable from "../components/Charts/ExcelTable";
import AddToTable from "./AddToTable";

function ShowAndEditTabel(props) {

  return (
    <div>
      <AddTabel />
      <ExcelTable />
      <AddToTable />
    </div>
  );
}

export default ShowAndEditTabel;
