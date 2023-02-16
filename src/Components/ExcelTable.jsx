import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import AddToTable from "../Pages/AddToTable";

function ExcelTable({ setShowExcle }) {
  const {
    FileTable,
    excelDataType,
    currentExcel,
    currentUser,
    userExcelCollection,
    setUserExcelCollection,
    setCurrentExcel,
  } = useContext(Context);

  const navigate = useNavigate();

  function deleteExcel() {
    axios
      .post(`${process.env.REACT_APP_EXPRESS_PORT}/DeleteTable`, {
        excel_id: currentExcel._id,
        user_id: currentUser._id,
      })
      .then((res) => {
        console.log(res.data);
        const temp = userExcelCollection.filter(
          (xl) => xl._id != currentExcel._id
        );
        setUserExcelCollection(temp);
        navigate("/DashBoard");
      })
      .catch((err) => console.log(err));
  }
  const [isAddShow, setIsAddShow] = useState(false);
  const [editShow, setEditAddShow] = useState(false);
  const [inputEdit, setInputEdit] = useState("");
  const [editValues, setEditValues] = useState({});
  function EditRowTable() {
    // const type = excelDataType[editValues.key]
    // console.log(editValues);
    // const [inputEdit, setInputEdit] = useState("")
    // console.log(currentExcel.excel_structure[editValues.row][editValues.key]);
    axios
      .post(`${process.env.REACT_APP_EXPRESS_PORT}/EditExcel`, {
        editValues,
        excel_id: currentExcel._id,
        inputValue: inputEdit,
      })
      .then((res) => {
        console.log(currentExcel);
        const temp = currentExcel.excel_structure;
        // console.log(editValues);
        temp[editValues.row][editValues.key] = inputEdit;
        setCurrentExcel(res.data.excel);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  function cheakDataType(key) {
    const type = excelDataType[key];
    return type;
  }
  return (
    <div>
      <div className="btn-wrapper-table">
        <button onClick={() => setShowExcle(false)}> back Add Excel</button>
        {/* {console.log(FileTable)} */}
        {currentExcel?._id && (
          <button onClick={deleteExcel}>Delete Current Excel</button>
        )}
        {!isAddShow ? (
          <button onClick={() => setIsAddShow(true)}>++</button>
        ) : (
          <button onClick={() => setIsAddShow(false)}>Cancle CreateRow</button>
        )}
      </div>
      {isAddShow && <AddToTable />}

      {editShow &&
        <div className="edit-input">
          <div className="edit-input-wrapper">

            <div className="edit-head">
              <span>Edit Here</span>
              <button onClick={() => setEditAddShow(false)}>Cancle Edit</button>
            </div>

            <div>
              <input type={editValues.type} onChange={(e) => setInputEdit(e.target.value)} />
              <button onClick={() => EditRowTable()}>Edit</button>

            </div>
          </div>

        </div>
      }
      <div className="table">
        <div className="table-wrapper">
          <table cellpadding="10">
            <thead>
              <tr>
                {FileTable &&
                  Object.keys(excelDataType)?.map((key, index) => {
                    return <th key={index}>{key}</th>;
                  })}
              </tr>
            </thead>
            <tbody>
              {/* {console.log(editValues)} */}
              {currentExcel.excel_structure &&
                currentExcel.excel_structure?.map((fullObj, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(excelDataType)?.map((key, i) => {
                        return (
                          <td
                            onDoubleClick={() => {
                              setEditAddShow(true);
                              setEditValues({
                                row: index,
                                key: key,
                                type: cheakDataType(key),
                              });
                            }}
                            key={i}
                          >
                            {fullObj[key]}
                          </td>
                        );
                        // console.log(columnData);
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* {console.log(currentExcel)} */}
    </div>
  );
}

export default ExcelTable;
