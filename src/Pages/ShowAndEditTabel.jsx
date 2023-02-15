import React, {useContext} from "react";

import AddTabel from "../components/AddTabel";
import ExcelTable from "../components/Charts/ExcelTable";
import AddToTable from "./AddToTable";
import NavBar from "../Components/NavBar";

function ShowAndEditTabel(props) {
  return (
    <div>
      <NavBar />

      <AddTabel />
      <ExcelTable />
      <AddToTable />
    </div>
  );
}

export default ShowAndEditTabel;
