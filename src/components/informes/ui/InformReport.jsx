import { useEffect, useState } from "react";
import {
  getLocalityInforms,
  getGeneralInfo,
} from "../../../services/apiInformes";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ReporTable from "./ReportTable";
import ReportGraphs from "./ReportGraphs";
import styled from "styled-components";
import ReportInfo from "./ReportInfo";
import ReportStadistics from "./ReportStadistics";
import ReportGeneralGraphs from "./ReportGeneralGraphs";

const ReportTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 35px 10px;
`;

function InformReport({ searchLocality }) {
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (searchLocality === "") {
        return;
      }
      try {
        setIsLoading(true);
        if (searchLocality === "Territorial") {
          const res = getGeneralInfo();
          res.then(
            function (data) {
              setInformes(data);
              setIsLoading(false);
            },
            function (error) {
              console.log(error);
            }
          );
          return;
        } else {
          const res = getLocalityInforms(searchLocality);
          res.then(
            function (data) {
              setInformes(data);
              setIsLoading(false);
            },
            function (error) {
              console.log(error);
            }
          );
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [searchLocality]);

  if (isLoading | (informes.length < 1))
    return <Loader size="md" content="Cargando" />;
  return (
    <div className="card-body">
      <p className="card-title">Reporte por Localidad:</p>
      {searchLocality !== "" && (
        <>
          <ReporTable informes={informes} />
          <ReportTemplate>
            <ReportInfo informe={informes[0]} />
            <ReportStadistics informes={informes} />
            {searchLocality === "Territorial" && <ReportGeneralGraphs />}
            <ReportGraphs informes={informes} />
          </ReportTemplate>
        </>
      )}
    </div>
  );
}

export default InformReport;
