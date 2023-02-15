import React, {useState} from "react";
import {useEffect} from "react";
import {useContext} from "react";
import {Context} from "../App";
import DataContext from "../DataContext";

function AddTable(props) {
  const {dataTypes, typeOfFieldsObj, setTypeOfFieldsObj} = useContext(Context);

  useEffect(() => {
    setTypeOfFieldsObj(() => {
      const tempObj = {};
      tabelArray[0].forEach((key) => {
        tempObj[key] = "";
      });
      return tempObj;
    });
  }, []);

  const [tabelArray, setArray] = useState([
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

  const [isAllTheFieldsWithDataType, setIsAllTheFieldsWithDataType] =
    useState(false);

  const changeTypeOfFieldsObj = (dataKey, newType) => {
    const newTypeOfFieldsObj = {...typeOfFieldsObj, [dataKey]: newType};
    setTypeOfFieldsObj(newTypeOfFieldsObj);

    let isFill = true;

    Object.keys(newTypeOfFieldsObj).forEach((key) => {
      if (newTypeOfFieldsObj[key] == "") isFill = false;
    });

    setIsAllTheFieldsWithDataType(isFill);
  };

  return (
    <div>
      add tabel
      <div>
        {tabelArray[0].map((item, index) => {
          return (
            <div key={index}>
              <input
                disabled
                defaultValue={item.toString().trim()}
                // placeholder={item.toString().trim()}
              />
              <select
                onChange={(e) => changeTypeOfFieldsObj(item, e.target.value)}
                name=""
                id="types"
              >
                <option value={""}>Select Type</option>

                {dataTypes?.map((type, i) => {
                  return (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      {isAllTheFieldsWithDataType && <button> submit </button>}
    </div>
  );
}

export default AddTable;
