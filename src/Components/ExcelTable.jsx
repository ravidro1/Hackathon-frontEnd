import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import AddToTable from "../Pages/AddToTable";

function ExcelTable({ setShowExcle }) {
  const { FileTable, excelDataType, currentExcel, user, userExcelCollection, setUserExcelCollection, setCurrentExcel } = useContext(Context);

  const navigate = useNavigate()

  function deleteExcel() {
    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/DeleteTable`, { excel_id: currentExcel._id, user_id: user._id })
      .then((res) => {
        console.log(res.data)
        const temp = userExcelCollection.filter(xl => xl._id != currentExcel._id)
        setUserExcelCollection(temp)
        navigate("/DashBoard")
      })
      .catch((err) => console.log(err))
  }
  const [isAddShow, setIsAddShow] = useState(false)
  const [editShow, setEditAddShow] = useState(false)
  const [inputEdit, setInputEdit] = useState("")
  const [editValues, setEditValues] = useState({})
  function EditRowTable() {
    // const type = excelDataType[editValues.key]
    // console.log(editValues);
    // const [inputEdit, setInputEdit] = useState("")
    // console.log(currentExcel.excel_structure[editValues.row][editValues.key]);
    axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/EditExcel`, { editValues, excel_id: currentExcel._id, inputValue: inputEdit })
      .then((res) => {
        console.log(currentExcel);
        const temp = currentExcel.excel_structure
        // console.log(editValues);
        temp[editValues.row][editValues.key] = inputEdit
        setCurrentExcel(res.data.excel)
        // console.log(res.data);

      }
      )
      .catch((err) => console.log(err))

  }
  function cheakDataType(key) {
    const type = excelDataType[key]
    return type
  }
  return (
    <div>
      <button onClick={() => setShowExcle(false)}> back Add Excel</button>
      {/* {console.log(FileTable)} */}
      {currentExcel?._id && <button onClick={deleteExcel}>Delete Current Excel</button>}
      {isAddShow && <AddToTable />}
      {!isAddShow ? <button onClick={() => setIsAddShow(true)}>++</button> : <button onClick={() => setIsAddShow(false)}>Cancle</button>}

      {editShow &&
        <>
          <input type={editValues.type} onChange={(e) => setInputEdit(e.target.value)} />
          <button onClick={() => EditRowTable()}>Edit</button>

        </>
      }
      <table>
        <thead>
          <tr>
            {FileTable && Object.keys(excelDataType)?.map((key, index) => {
              return <th key={index}>{key}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {/* {console.log(editValues)} */}
          {
            currentExcel.excel_structure && currentExcel.excel_structure?.map((fullObj, index) => {
              return (<tr key={index}>
                {Object.keys(excelDataType)?.map((key, i) => {
                  return <td onDoubleClick={() => {
                    setEditAddShow(true)
                    setEditValues({ row: index, key: key, type: cheakDataType(key) })
                  }} key={i} >{fullObj[key]}</td>
                  // console.log(columnData);
                })}
              </tr>)
            })
          }
        </tbody>
      </table>
      {/* {console.log(currentExcel)} */}

    </div>
  )
}

export default ExcelTable;
