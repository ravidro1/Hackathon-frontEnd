import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../App";
import DefineDataTypes from "./DefineDataTypes";

import axios from "axios";

function AddTabel(props) {
  const {dataTypes, typeOfFieldsObj, setTypeOfFieldsObj} = useContext(Context);

  const [tabelArray, setArray] = useState([
    [
      "Full Name",
      "Job Title",
      "Department",
      "Business Unit",
      "Gender",
      "Ethnicity",
      "Age",
    ],
  ]);

  const fileInputRef = useRef();

  const [tempFile, setTempFile] = useState();
  const [Tabel, setTabel] = useState();



  const [isAllTheFieldsWithDataType, setIsAllTheFieldsWithDataType] =
    useState(false);

  useEffect(() => {
    if (typeOfFieldsObj) {
      let isFill = true;

      Object.keys(typeOfFieldsObj).forEach((key) => {
        if (typeOfFieldsObj[key] == "") isFill = false;
      });

      setIsAllTheFieldsWithDataType(isFill);
    }
  }, [typeOfFieldsObj]);


  return (
    <div>
      <input
        ref={fileInputRef}
        onChange={(e) => {
          setTempFile(e.target.files[0]);
        }}
        type={"file"}
      />
      <button> Add Tabel </button>

      {Tabel && <DefineDataTypes tabelArray={tabelArray} />}
      {isAllTheFieldsWithDataType && <button> submit </button>}
    </div>
  );
}

export default AddTabel;
