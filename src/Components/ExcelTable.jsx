import React, {useContext} from "react";
import {Context} from "../App";

function ExcelTable() {
  const {FileTable, excelDataType} = useContext(Context);

  return (
    <div>
      {console.log(FileTable)}
      <h1>HEllo</h1>
      <table>
        <thead>
          <tr>
            {FileTable[0] &&
              Object.keys(excelDataType)?.map((key, index) => {
                return <th key={index}>{key}</th>;
                // console.log(Object.keys(FileTable[0]))
              })}
          </tr>
        </thead>
        <tbody>
          {FileTable &&
            FileTable?.map((fullObj, index) => {
              return (
                <tr key={index}>
                  {Object.keys(excelDataType)?.map((key, i) => {
                    return <td key={i}>{fullObj[key]}</td>;
                    // console.log(columnData);
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelTable;
