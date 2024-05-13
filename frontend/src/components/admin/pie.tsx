import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

interface PieChartProps {
  labels: string[];
  data_1: number[];
  backgroundColor_1: string[];
  offset?: number[];
}

export const PieChart1 = ({
  labels,
  data_1,
  backgroundColor_1,
  offset,
}: PieChartProps) => {
  const piechartData: ChartData<'pie', number[], string> = {
    labels,
    datasets: [
      {
        data: data_1,
        backgroundColor: backgroundColor_1,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const piechartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
       
      },
    },
   
  };

  return (
    <div>
      <Pie data={piechartData} options={piechartOptions} />
    </div>
  );
};

export default PieChart1;