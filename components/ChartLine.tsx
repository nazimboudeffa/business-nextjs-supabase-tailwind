import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function ChartLine() {
  const [data, setData]= useState({
    labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"2022",
        //data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor:'000',
        borderColor:'#1338be',
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      },
      {
        label:"2023",
        //data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor:'000',
        borderColor:'#0492c2',
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })
  return (
    <div className="w-full">
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default ChartLine;