import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../App';
import DefineDataTypes from './DefineDataTypes';

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
  
    const addTabel = () => {
      setTabel(tempFile);
      setTempFile("");
  
      // axios
      //   .post("")
      //   .then((res) => {})
      //   .catch((err) => {
      //     console.log(err);
      //   });
  
      fileInputRef.current.value = [];
    };
  
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
        <button onClick={addTabel}> Add Tabel </button>
  
        {Tabel && <DefineDataTypes tabelArray={tabelArray} />}
        {isAllTheFieldsWithDataType && <button> submit </button>}
      </div>
    );
  }

export default AddTabel;