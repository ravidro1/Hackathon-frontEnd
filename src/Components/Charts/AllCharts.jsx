import React, {useContext, useEffect} from "react";
import {useState} from "react";
import {Context} from "../../App";
import BarChart from "./BarChart";
import uniqolor from "uniqolor";

function AllCharts({type, getAllKeys}) {
  const {currentExcel, excelDataType} = useContext(Context);
  const [table] = useState(currentExcel.excel_structure);
  //   const [chartData, setChartData] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const [selectedKeyT, setSelectedKeyT] = useState({});

  const [selectedKey1, setSelectedKey1] = useState();
  const [selectedKey2, setSelectedKey2] = useState();

  const [listOfKeys, setListOfKeys] = useState();

  const getCount = (key, label) => {
    const uniqueList = {};
    table?.forEach((row) => {
      if (!Object.keys(uniqueList).includes(row[key])) {
        uniqueList[row[key]] = 0;
      }
    });

    table?.forEach((row) => {
      uniqueList[row[key]] += 1;
    });

    const labels = [];
    const values = [];
    const backgroundColors = [];
    const borderColors = [];

    Object.keys(uniqueList).forEach((oneKey) => {
      labels.push(oneKey);
      values.push(uniqueList[oneKey]);
      const color = uniqolor.random().color;
      backgroundColors.push(color);
      borderColors.push(color);
    });

    const allData = {
      labels: labels,
      datasets: [
        {
          label: label,
          data: values,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
          cutout: "65%",
        },
      ],
    };

    return allData;
  };

  const getComparisonOfTwoData = (key1, key2, label1, label2) => {
    const uniqueList1 = {};
    const uniqueList2 = {};

    table?.forEach((row) => {
      if (!Object.keys(uniqueList1).includes(row[key1])) {
        uniqueList1[row[key1]] = 0;
      }
      if (!Object.keys(uniqueList2).includes(row[key2])) {
        uniqueList2[row[key2]] = 0;
      }
    });

    table?.forEach((row) => {
      uniqueList1[row[key1]] += 1;
      uniqueList2[row[key2]] += 1;
    });

    const labels1 = [];
    const values1 = [];
    const backgroundColors1 = [];
    const borderColors1 = [];

    Object.keys(uniqueList1).forEach((oneKey1) => {
      labels1.push(oneKey1);
      values1.push(uniqueList1[oneKey1]);
      const color = uniqolor.random().color;
      backgroundColors1.push(color);
      borderColors1.push(color);
    });
    const labels2 = [];
    const values2 = [];
    const backgroundColors2 = [];
    const borderColors2 = [];

    Object.keys(uniqueList2).forEach((oneKey2) => {
      labels2.push(oneKey2);
      values2.push(uniqueList2[oneKey2]);
      const color = uniqolor.random().color;
      backgroundColors2.push(color);
      borderColors2.push(color);
    });

    const allData = {
      labels: ["1", "2"],
      datasets: [
        {
          label: "label1",
          data: values1,
          backgroundColor: backgroundColors1,
          borderColor: borderColors1,
          borderWidth: 1,
          cutout: "65%",
        },
        {
          label: "label2",
          data: values2,
          backgroundColor: backgroundColors2,
          borderColor: borderColors2,
          borderWidth: 1,
          cutout: "65%",
        },
      ],
    };

    return allData;
  };

  //   const getComparisonOfTwoData = (keys, labels) => {
  //     const uniqueListArray = [{}];

  //     keys?.map((key, index) => {
  //       table?.forEach((row, i) => {
  //         if (!Object.keys(uniqueListArray[index][key])?.includes(row[key])) {
  //           uniqueListArray[index][key] = 0;
  //         }
  //       });
  //     });

  //     keys?.map((key, index) => {
  //       table?.forEach((row, index) => {
  //         uniqueListArray[index][key] += 1;
  //       });
  //     });

  //     console.log(uniqueListArray);

  // const labels1 = [];
  // const values1 = [];
  // const backgroundColors1 = [];
  // const borderColors1 = [];

  // Object.keys(uniqueList1).forEach((oneKey1) => {
  //   labels1.push(oneKey1);
  //   values1.push(uniqueList1[oneKey1]);
  //   const color = uniqolor.random().color;
  //   backgroundColors1.push(color);
  //   borderColors1.push(color);
  // });
  // const labels2 = [];
  // const values2 = [];
  // const backgroundColors2 = [];
  // const borderColors2 = [];

  // Object.keys(uniqueList2).forEach((oneKey2) => {
  //   labels2.push(oneKey2);
  //   values2.push(uniqueList2[oneKey2]);
  //   const color = uniqolor.random().color;
  //   backgroundColors2.push(color);
  //   borderColors2.push(color);
  // });

  // const allData = {
  //   labels: ["1", "2"],
  //   datasets: [
  //     {
  //       label: "label1",
  //       data: values1,
  //       backgroundColor: backgroundColors1,
  //       borderColor: borderColors1,
  //       borderWidth: 1,
  //       cutout: "65%",
  //     },
  //     {
  //       label: "label2",
  //       data: values2,
  //       backgroundColor: backgroundColors2,
  //       borderColor: borderColors2,
  //       borderWidth: 1,
  //       cutout: "65%",
  //     },
  //   ],
  // };

  // return allData;
  //   };

  useEffect(() => {
    if (type == "ComparisonOfTwoData-all") setListOfKeys(getAllKeys(type));
  }, [type]);

  return (
    <div>
      {/* count-all */}

      {type == "count-all" && (
        <>
          <datalist id="keysList">
            {getAllKeys(type)?.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </datalist>

          <input
            onChange={(e) => setSelectedKey(e.target.value)}
            placeholder="key"
            list="keysList"
          />

          {Object.keys(excelDataType).includes(selectedKey, "Hey") && (
            <BarChart
              label={"dsa"}
              data={getCount(selectedKey)}
              headLineText={"dsa"}
              headLineTextfontSize={"30%"}
              width={"400px"}
              height={"400px"}
              backgroundColor={"white"}
            />
          )}
        </>
      )}

      {type == "ComparisonOfTwoData-all" && (
        <>
          <datalist id="keysList2">
            {listOfKeys?.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </datalist>

          <input
            onChange={(e) => {
              setListOfKeys(
                listOfKeys.filter((item) => item != e.target.value)
              );
              setSelectedKey1(e.target.value);
            }}
            placeholder="key"
            list="keysList2"
          />
          {selectedKey1 && (
            <input
              onChange={(e) => setSelectedKey2(e.target.value)}
              placeholder="key"
              list="keysList2"
            />
          )}

          {Object.keys(excelDataType).includes(selectedKey1) &&
            Object.keys(excelDataType).includes(selectedKey2) && (
              <BarChart
                data={getComparisonOfTwoData(
                  selectedKey1,
                  selectedKey2,
                  "label1",
                  "label2"
                )}
                headLineText={"dsa"}
                headLineTextfontSize={"30%"}
                width={"400px"}
                height={"400px"}
                backgroundColor={"white"}
              />
            )}
        </>
      )}
    </div>
  );
}

export default AllCharts;
