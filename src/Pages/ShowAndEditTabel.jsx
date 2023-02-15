import React, { useContext } from "react";
import { Context } from "../App";

import AddTabel from "../Components/AddTabel";
import ExcelTable from "../Components/Charts/ExcelTable";
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
