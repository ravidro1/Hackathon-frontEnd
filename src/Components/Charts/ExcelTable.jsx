import React, { useContext } from 'react'

function ExcelTable() {
    const { FileTable } = useContext(Context);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {FileTable[0] && Object.keys(FileTable[0])?.forEach((columnName) => {
                            <th>{columnName}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        FileTable.map((fullObj) => {
                            <tr>
                                {Object.values(fullObj)?.forEach((columnData) => {
                                    <td>{columnData}</td>
                                })}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExcelTable