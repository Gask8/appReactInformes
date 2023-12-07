import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data1, data2, labels, title }) {
  const prepare = {
    labels,
    datasets: [
      {
        label: "Femenino",
        data: data2,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Masculino",
        data: data1,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        align: "end",
        offset: 1,
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
  };

  return <Line id="canvasChart" options={options} data={prepare} />;
}

export default Chart;
