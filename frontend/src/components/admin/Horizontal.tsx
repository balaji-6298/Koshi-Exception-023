import React from 'react';
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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface chartGraph{
   horizontal?:boolean,
   data_1:number[],
   data_2:number[],
   title_1:string,
   title_2:string,
   bgColor_1:string,
   bgColor_2:string,
   labels?:string[]
}
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
export function HorizontalGraph({
    horizontal=false,
   data_1=[],
  
   title_1,
  
   bgColor_1,
  
   labels=months
}:chartGraph) {
     const options: ChartOptions<'bar'> = {
        responsive: true,
        indexAxis:horizontal?'y':'x',
        plugins: {
          legend: {
            display:false
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
     
      const data:ChartData<'bar',number[],string> = {
        labels,
        datasets: [
          {
            label:title_1,
            data:data_1,
            backgroundColor: bgColor_1,
          },
        ],
      };
  return <Bar options={options} data={data} />;
}
