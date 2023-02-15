import React, { useContext } from 'react'
import { Context } from '../../App';

function ExcelTable() {
    const { FileTable } = useContext(Context);

    return (
        <div>
            {console.log(FileTable)}
            <h1>HEllo</h1>
            <table>
                <thead>
                    <tr>
                        {FileTable[0] && Object.keys(FileTable[0])?.map((columnName, index) => {
                            return <th key={index}>{columnName}</th>
                            // console.log(Object.keys(FileTable[0]))

                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        FileTable && FileTable?.map((fullObj, index) => {
                            return (<tr key={index}>
                                {Object.values(fullObj)?.map((columnData, i) => {
                                    return <td key={i} >{columnData}</td>
                                    // console.log(columnData);
                                })}
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExcelTable