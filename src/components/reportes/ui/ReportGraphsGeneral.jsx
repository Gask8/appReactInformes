import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { nombreSecciones } from "../../../utils/dataArray";
import Accordion from "../../../ui/Accordion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function ReportGraphsGeneral({ informe }) {
  const labels = nombreSecciones;

  const data1 = [
    informe.ma_ef,
    informe.ma_em,
    informe.ma_jf,
    informe.ma_jm,
    informe.ma_af,
    informe.ma_am,
  ];

  const data2 = [
    informe.mna_ef,
    informe.mna_em,
    informe.mna_jf,
    informe.mna_jm,
    informe.mna_af,
    informe.mna_am,
  ];

  const optionsBar = {
    scaleShowValues: true,
    scales: {
      y: {
        ticks: {
          autoSkip: false,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        anchor: "end",
        align: "end",
        offset: 4,
      },
    },
  };

  const dataBar = {
    labels,
    datasets: [
      {
        label: "Miembros Asociados",
        data: data1,
        borderColor: "rgb(99, 255, 99)",
        backgroundColor: "rgba(99, 255, 99, 0.5)",
      },
      {
        label: "Miembros NO Asociados",
        data: data2,
        borderColor: "rgb(235, 53, 53)",
        backgroundColor: "rgba(235, 53, 53, 0.5)",
      },
    ],
  };

  const data3 = data1.map(function (num, idx) {
    return num + data2[idx];
  });

  const total3 = data3.reduce((acc, i) => acc + i, 0);

  const labelsPie = labels.map(
    (i, ind) => i + " - " + ((data3[ind] / total3) * 100).toFixed(1) + "%"
  );

  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        labels: {},
      },
      legend: {
        position: "right",
      },
    },
  };

  const dataPie = {
    labels: labelsPie,
    datasets: [
      {
        label: "# de miembros",
        data: data3,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(150, 247, 72, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(150, 247, 72, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Accordion id="accordion-graphs">
      <Accordion.Item idName="bar">
        <Accordion.Header>Miembros por Localidad</Accordion.Header>
        <Accordion.Content>
          <div style={{ margin: "0px 10%" }}>
            <Bar options={optionsBar} data={dataBar} />
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item idName="pie">
        <Accordion.Header>
          Composicion Local de Todos los Miembros
        </Accordion.Header>
        <Accordion.Content>
          <div style={{ margin: "20px 25%" }}>
            <Pie options={optionsPie} data={dataPie} />
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

export default ReportGraphsGeneral;
