import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import AddToTable from "../Pages/AddToTable";

function ExcelTable({ setShowExcle }) {
  const { FileTable, excelDataType, currentExcel, user, userExcelCollection, setUserExcelCollection } = useContext(Context);

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

  return (
    <div>
      <button onClick={() => setShowExcle(false)}> back Add Excel</button>
      {console.log(FileTable)}
      {currentExcel?._id && <button onClick={deleteExcel}>Delete Current Excel</button>}
      {isAddShow && <AddToTable />}
      {!isAddShow ? <button onClick={() => setIsAddShow(true)}>++</button> : <button onClick={() => setIsAddShow(false)}>Cancle</button>}
      <table>
        <thead>
          <tr>
            {FileTable && Object.keys(excelDataType)?.map((key, index) => {
              return <th key={index}>{key}</th>
              // console.log(Object.keys(FileTable[0]))

            })}
          </tr>
        </thead>
        <tbody>
          {/* {FileTable && <>hELLO</>} */}
          {
            FileTable && FileTable?.map((fullObj, index) => {
              return (<tr key={index}>
                {Object.keys(excelDataType)?.map((key, i) => {
                  return <td key={i} >{fullObj[key]}</td>
                  // console.log(columnData);
                })}
              </tr>)
            })
          }
        </tbody>
      </table>
      {console.log(currentExcel)}

    </div>
  )
}

export default ExcelTable;
