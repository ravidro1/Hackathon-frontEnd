import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, plugins, scales} from "chart.js/auto";

function BarChart({
  label,
  arrayOfObject,
  headLineText,
  headLineTextfontSize,
  width,
  height,
  backgroundColor
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
          borderWidth: 1,
          cutout: "65%",
          // hoverOffset: 30,
          hoverOffset: 0,
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
    // aspectRatio: 1,
    layout: {
      padding: {
        top: 30,
      },
    },
    plugins: {
      chartArea: {
        backgroundColor: "rgba(251, 85, 85, 0.4)",
      },

      legend: {
        // display: false,
      },
    },
  });

  const [customCanvasBackgroundColor] = useState({
    // color: "lightGreen",
    id: "customCanvasBackgroundColor",
    beforeDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: {top, bottom, left, right, width, height},
        scales: {x, y},
      } = chart;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left,top,width,height)
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

      const x = width / 2;
      // const x = 0;
      const y = height * 0.1;

      ctx.font = `bold ${headLineTextfontSize} sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(headLineText, x, y);
    },
  });

  return (
    <div style={{width, height}}>
      {data && (
        <Bar
          data={data}
          options={op}
          plugins={[doughnutText, customCanvasBackgroundColor]}
        />
      )}
    </div>
  );
}

export default BarChart;
