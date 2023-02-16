import React, {useContext} from "react";
import {useState} from "react";
import {Context} from "../../App";
import AllCharts from "./AllCharts";
import DateCharts from "./DateCharts";
import NumberCharts from "./NumberCharts";
import TextChart from "./TextChart";

function ChooseFilterChart(props) {
  const {FileTable, excelDataType, currentExcel, typeOfFieldsObj} =
    useContext(Context);

  const [selectedKey, setSelectedKey] = useState("");
  const [tempChartType, setTempChartType] = useState("");
  const [selectedChartType, setSelectedChartType] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [ChartsType] = useState({
    text: ["ComparisonOfAColumnUsingFilters"],
    number: ["percentagesPie"],
    date: ["leftTimeInPercentages"],
    all: ["count-all", "ComparisonOfTwoData-all", "ComparisonOfAllData"],
  });

  const getKeyByType = (chartType) => {
    let foundKey;
    Object.keys(ChartsType).map((key) => {
      if (ChartsType[key].includes(chartType)) {
        foundKey = key;
      }
    });

    return foundKey;
  };

  const getAllKeys = (chartType) => {
    let arrayOfkeyWithTheSameType = [];

    Object.keys(excelDataType).forEach((key) => {
      if (
        excelDataType[key] == getKeyByType(chartType) ||
        getKeyByType(chartType) == "all"
      ) {
        arrayOfkeyWithTheSameType.push(key);
      }
    });

    return arrayOfkeyWithTheSameType;
  };

  const getTypeList = (selectedKey) => {
    let type;
    Object.keys(excelDataType).map((key) => {
      if (selectedKey == key) {
        type = excelDataType[key];
      }
    });
    return type;
  };

  //   const getDataByFilters = () => {
  //     const arrayOfFilters = [];
  //     {
  //       excelDataType &&
  //         Object.keys(excelDataType)?.forEach((key, index) => {
  //           arrayOfFilters.push(key);
  //         });
  //     }

  //     return arrayOfFilters;
  //   };

  return (
    <div>
      {currentExcel.excel_structure && (
        <input
          onChange={(e) => setTempChartType(e.target.value)}
          placeholder="type"
          list="typesList"
        />
      )}

      {Object.keys(ChartsType).map((key) => {
        if (ChartsType[key].includes(tempChartType)) {
          return (
            <input
              onClick={() => setSelectedChartType(tempChartType)}
              type="submit"
            />
          );
        }
      })}

      {ChartsType.all.includes(selectedChartType) && (
        <AllCharts type={selectedChartType} getAllKeys={getAllKeys} />
      )}

      <datalist id="typesList">
        <option value={""}> select </option>
        {Object.values(ChartsType)?.map((typeArray, i) => {
          return typeArray?.map((type, index) => {
            return (
              <option key={index * i} value={type}>
                {type}
              </option>
            );
          });
        })}
      </datalist>

      {/* {ChartsType.number.includes(selectedChartType) && (
        <NumberCharts
  
        />
      )}



      {ChartsType.text.includes(selectedChartType) && (
        <TextChart

        />
      )}

      {ChartsType.text.includes(selectedChartType) && (
        <DateCharts

        />
      )} */}

      {/* {selectedChartType && (
        <input
          onChange={(e) => setSelectedFilters(e.target.value)}
          placeholder="filter"
          list="filtersList"
        />
      )} */}

      {/* {ChartsType["all"]?.map((type, index) => {
          return (
            <option key={index} value={type}>
              {" "}
              {type}{" "}
            </option>
          );
        })} */}
    </div>
  );
}

export default ChooseFilterChart;
