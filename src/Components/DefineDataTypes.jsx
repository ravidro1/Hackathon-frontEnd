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

      tabelArray && Object.keys(tabelArray[0])?.forEach((key, index) => {

        tempObj[key] = "";

      })


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
        {tabelArray && Object.keys(tabelArray[0])?.map((key, index) => {
          return (
            <div key={index}>
              <input
                disabled
                defaultValue={[key].toString().trim()}
              />
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
