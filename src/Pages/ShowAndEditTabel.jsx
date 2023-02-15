import React, { useContext } from "react";
import { Context } from "../App";

import AddTabel from "../Components/AddTabel";
import ExcelTable from "../Components/Charts/ExcelTable";

function ShowAndEditTabel(props) {

  return (
    <div>
      <AddTabel />
      <ExcelTable />
    </div>
  );
}

export default ShowAndEditTabel;
