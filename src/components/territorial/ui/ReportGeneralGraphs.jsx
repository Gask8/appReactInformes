import React, { useEffect, useState } from "react";
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
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { getLastReports } from "../../../services/apiReportes";
import { nombreSecciones } from "../../../utils/dataArray";
import ChartDataLabels from "chartjs-plugin-datalabels";
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

function ReportGeneralGraph() {
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let sortedData = informes.sort(
    (a, b) =>
      b.ma_ef +
      b.ma_em +
      b.ma_af +
      b.ma_am +
      b.ma_jf +
      b.ma_jm -
      (a.ma_ef + a.ma_em + a.ma_af + a.ma_am + a.ma_jf + a.ma_jm)
  );

  const labels = sortedData.map((i) => i.localidad);
  const data1 = sortedData.map(
    (i) => i.ma_ef + i.ma_em + i.ma_af + i.ma_am + i.ma_jf + i.ma_jm
  );
  const data2 = sortedData.map(
    (i) => i.mna_ef + i.mna_em + i.mna_af + i.mna_am + i.mna_jf + i.mna_jm
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = getLastReports();
        res.then(
          function (data) {
            setInformes(data);
            setIsLoading(false);
          },
          function (error) {
            console.log(error);
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const optionsBar = {
    indexAxis: "y",
    // scaleShowValues: true,
    maintainAspectRatio: false,
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
      // legend: {
      //   position: "right",
      // },
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

  const data3 = informes.reduce(
    (acc, i) => {
      acc[0] += i.ma_ef;
      acc[1] += i.ma_em;
      acc[2] += i.ma_jf;
      acc[3] += i.ma_jm;
      acc[4] += i.ma_af;
      acc[5] += i.ma_am;
      return acc;
    },
    [0, 0, 0, 0, 0, 0]
  );

  const total3 = data3.reduce((acc, i) => acc + i, 0);

  const labelsPie = nombreSecciones.map(
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
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) return <Loader center size="md" content="Cargando" />;

  return (
    <Accordion id="accordion-graphs">
      <Accordion.Item idName="bar">
        <Accordion.Header>Miembros por Localidad</Accordion.Header>
        <Accordion.Content>
          <div style={{ margin: " 0 10%", height: "1000px" }}>
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

export default ReportGeneralGraph;
