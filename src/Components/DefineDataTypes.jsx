import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../App";
import DataContext from "../DataContext";
import AddTabel from "./AddTabel";

function DefineDataTypes({ tabelArray }) {
  const { dataTypes, typeOfFieldsObj, setTypeOfFieldsObj } = useContext(Context);

  useEffect(() => {
    setTypeOfFieldsObj(() => {
      const tempObj = {};
      tabelArray && tabelArray[0]?.forEach((key) => {
        tempObj[key] = "";
      });
      return tempObj;
    });
  }, []);


  let t = [
    [
      "Full Name",
      "Job Title",
      "Department",
      "Business Unit",
      "Gender",
      "Ethnicity",
      "Age",
    ],
  ]

  const changeTypeOfFieldsObj = (dataKey, newType) => {
    const newTypeOfFieldsObj = { ...typeOfFieldsObj, [dataKey]: newType };
    setTypeOfFieldsObj(newTypeOfFieldsObj);
  };

  return (
    <div>
      <div>
        {tabelArray && tabelArray[0]?.map((item, index) => {
          return (
            <div key={index}>
              <input
                disabled
                defaultValue={item.toString().trim()}
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
    </div>
  );
}

export default DefineDataTypes;
