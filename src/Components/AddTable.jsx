import React, {useState} from "react";

function AddTable(props) {
  const [array, setArray] = useState([
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

  const [dataTypes, setDataTypes] = useState([
    "number",
    "text",
    "Date",
    "Two Values",
  ]);

  return (
    <div style={{width: "100%", height: "100%"}}>
      add tabel
      <div>
        {array[0].map((item, index) => {
          return <div>
            <input
              key={index}
              defaultValue={item.toString().trim()}
              placeholder={item.toString().trim()}
            />
            <select name="" id="types">
              {dataTypes.map((type, i) => {
                return (
                  <option key={i} value={type}>
                    {" "}
                    {type}{" "}
                  </option>
                );
              })}
            </select>
          </div>;
        })}
      </div>
    </div>
  );
}

export default AddTable;
