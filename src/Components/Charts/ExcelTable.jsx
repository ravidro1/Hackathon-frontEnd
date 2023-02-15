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
                        {FileTable[0] && Object.keys(FileTable[0]).map((columnName) => {
                            return <th>{columnName}</th>
                            console.log(Object.keys(FileTable[0]))

                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        FileTable[0] && FileTable.map((fullObj) => {
                            return (<tr>
                                {Object.values(fullObj)?.map((columnData) => {
                                    return <td>{columnData}</td>
                                    console.log(columnData);
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