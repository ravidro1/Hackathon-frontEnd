import React, {useContext} from "react";
import {useState} from "react";
import {Context} from "../../App";

function ChooseFilterChart(props) {
  const {FileTable, excelDataType, currentExcel, typeOfFieldsObj} =
    useContext(Context);

  const [selectedKey, setSelectedKey] = useState();
  const [selectedChartType, setSelectedChartType] = useState();

  const [ChartsType] = useState({
    text: ["ComparisonOfAColumnUsingFilters"],
    num: ["percentagesPie"],
    date: ["leftTimeInPercentages"],
  });

  return (
    <div>
      <input onChange={setSelectedKey} placeholder="key" list="keysList" />

      {Object.keys(excelDataType)?.includes(selectedKey) && (
        <input onChange={setSelectedChartType} placeholder="type" />
      )}

      {selectedChartType && <input placeholder="filter" />}

      <datalist id="keysList">
        {Object.keys(excelDataType)?.map((item) => {
          <option value={item}>{item}</option>;
        })}
      </datalist>
    </div>
  );
}

export default ChooseFilterChart;
