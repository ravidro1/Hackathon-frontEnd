import React, {useEffect, useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, plugins} from "chart.js/auto";

function DoughnutChart({
  label,
  arrayOfObject,
  middelText,
  middelTextfontSize,
  width,
  height,
}) {
  const [data, setData] = useState();

  useEffect(() => {
    const tempValue = {
      labels: [],
      datasets: [
        {
          label: label,
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 2,
          cutout: "65%",
        },
      ],
    };

    arrayOfObject.forEach((item) => {
      tempValue.labels.push(item.name);
      tempValue.datasets[0].backgroundColor.push(item.backgroundColor);
      tempValue.datasets[0].borderColor.push(item.borderColor);
      tempValue.datasets[0].data.push(item.value);
    });

    console.log(tempValue);

    setData(tempValue);
  }, [arrayOfObject]);

  const [op] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });

  const [doughnutText] = useState({
    id: "doughnutText",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        option,
        _active,
        chartArea: {top, bottom, left, right, width, height},
      } = chart;

      ctx.save();

      if (_active.length) {
        const x = _active[0].element.x;
        const y = _active[0].element.y;

        ctx.font = `bold ${middelTextfontSize} sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(middelText, x, y);
      }
    },
  });

  return (
    <div style={{width, height}}>
      {data && <Doughnut data={data} options={op} plugins={[doughnutText]} />}
    </div>
  );
}

export default DoughnutChart;
