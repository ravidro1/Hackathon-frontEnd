import React, {useState} from "react";

function DataContext(props) {
  const [dataTypes] = useState(["number", "text", "Date", "Two Values"]);

  const [typeOfFieldsObj, setTypeOfFieldsObj] = useState();

  return {
    dataTypes,
    typeOfFieldsObj,
    setTypeOfFieldsObj,
  };
}

export default DataContext;
