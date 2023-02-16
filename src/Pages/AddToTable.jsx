import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
// import Execl from '../../../server/Models/Execl'
import { Context } from '../App'

function AddToTable() {
    const { user, excelDataType, FileTable, setFileTable, currentExcel, setCurrentExcel } = useContext(Context)
    const [newTableRow, setNewTableRow] = useState("")
    const [isFilled, setIsFilled] = useState(false)
    // const { typeOfFieldsObj } = useContext(Context)

    useEffect(() => {
        if (newTableRow) {
            let isFill = true;

            Object.keys(newTableRow).forEach((key) => {
                if (newTableRow[key] == "") isFill = false;
            });

            setIsFilled(isFill);
        }
    }, [newTableRow])

    const addValueToRow = (dataKey, newType) => {
        const newTypeOfFieldsObj = { ...newTableRow, [dataKey]: newType };
        setNewTableRow(newTypeOfFieldsObj);
    };

    function addRowToTable() {
        console.log(newTableRow);
        console.log(currentExcel._id);
        axios.post(`${process.env.REACT_APP_EXPRESS_PORT}/AddRowToTable`, { newRow: newTableRow, id: currentExcel._id })
            .then(res => {
                console.log(res.data);
                setFileTable(res.data.excelTable.excel_structure)
            })
            .catch(err => { console.log(err); })
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Object.keys(excelDataType).map((key, index) => {
                return (<div key={index}>
                    <input onChange={((e) => addValueToRow(key, e.target.value))} placeholder={key} />

                </div>)
            })}
            {isFilled && <button onClick={addRowToTable}>Add Row</button>}
            {/* {typeOfFieldsObj.)} */}
        </div>
    )
}

export default AddToTable