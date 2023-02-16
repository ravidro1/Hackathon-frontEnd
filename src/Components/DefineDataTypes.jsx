import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../App";
import DataContext from "../DataContext";
import AddTabel from "./AddTabel";

function DefineDataTypes({ tabelArray }) {
  const { dataTypes, typeOfFieldsObj, setTypeOfFieldsObj } = useContext(Context);

  useEffect(() => {
    if (typeOfFieldsObj) {
    }
  }, [typeOfFieldsObj]);

  const changeTypeOfFieldsObj = (dataKey, newType) => {
    const newTypeOfFieldsObj = { ...typeOfFieldsObj, [dataKey]: newType };
    setTypeOfFieldsObj(newTypeOfFieldsObj);
  };

  return (
    <div className="select-wrapper">
      <div className="select-btn">
        {Object.keys(typeOfFieldsObj)?.map((key, index) => {
          return (
            <div className="single-select-btn" key={index}>
              <input disabled defaultValue={[key].toString().trim()} />
              <select
                onChange={(e) => changeTypeOfFieldsObj(key, e.target.value)}
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
    </div>
  );
}

export default DefineDataTypes;
