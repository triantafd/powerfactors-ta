/** @format */

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);


interface PieChartProps<T> {
  data: T[];
  getName: (item: T) => string;
  getValue: (item: T) => number;
}

const PieChart = <T,>({ data, getName, getValue }: PieChartProps<T>) => {
  const chartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Character Film Participation",
    },
    tooltip: {
      pointFormat:
        "{series.name}: <b>{point.percentage:.1f}%</b><br>Films: {point.films}",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Characters",
        colorByPoint: true,
        data: data?.map((character: any) => ({
          name: character.name,
          y: character.films.length,
          films: character.films.join(", "),
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default PieChart;
