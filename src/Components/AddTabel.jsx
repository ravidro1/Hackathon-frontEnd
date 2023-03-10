import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../App";
import DefineDataTypes from "./DefineDataTypes";

import axios from "axios";

function AddTabel({ setShowExcle }) {
  const { dataTypes, typeOfFieldsObj, setTypeOfFieldsObj, FileTable, setFileTable, currentUser, setExcelDataType, setCurrentExcel } = useContext(Context);



  const fileInputRef = useRef();

  const [tempFile, setTempFile] = useState();
  const [Tabel, setTabel] = useState();
  const [excelName, setExcelName] = useState("");

  const uploadFileToDb = () => {
    const fileData = new FormData();
    fileData.append("uploadFile", tempFile);

    if (tempFile) {
      axios
        .post(
          `${process.env.REACT_APP_EXPRESS_PORT}/HandleFileUpload`,
          fileData
        )
        .then((res) => {
          console.log(res.data);

          const tempObj = {};
          res.data.keys?.forEach((key) => {
            tempObj[key] = "";
          });
          setTypeOfFieldsObj(tempObj);

          setTabel(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setTempFile("");
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

  function setSchemaMongoose() {
    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/UploadTableToDataBase`, { dataType: typeOfFieldsObj, tableData: Tabel, name: excelName, user_id: currentUser._id })
      .then(res => {
        console.log(res.data);
        setFileTable(res.data.excelTable)
        setExcelDataType(res.data.excelDataType)
        setCurrentExcel(res.data.excel)
        setShowExcle(true)
      })
      .catch(err => { console.log(err); })
  }

  return (
    <div className="uploadfile-wrapper">
      <div className="uploadfile">

        <div className="uploadfile-form">
          <input
            ref={fileInputRef}
            onChange={(e) => {
              setTempFile(e.target.files[0]);
            }}
            type={"file"}
          />
          <button onClick={uploadFileToDb}> Add Tabel </button>
        </div>
        {isAllTheFieldsWithDataType && (
          <div className="excle-name">
            <h3>Enter Excel Name</h3>
            <input type="text" onChange={(e) => setExcelName(e.target.value)} />
          </div>
        )}
        {excelName.length > 3 && (
          <div className="submit-btn">

            <button onClick={setSchemaMongoose}> submit </button>
          </div>
        )}
        {Tabel && <DefineDataTypes tabelArray={Tabel} />}
      </div>
    </div>
  );
}

export default AddTabel;
