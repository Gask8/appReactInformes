import { useEffect, useState } from "react";
import { getGeneralInfo } from "../../services/apiReportes";
import styled from "styled-components";
// import LocalitySelector from "../../ui/LocalitySelector";

import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import ReportGraphs from "../reportes/ui/ReportGraphsHistorical";
import ReportInfo from "./ui/ReportInfo";
import ManoAmigaTable from "./ui/ManoAmigaTable";
import AnalisisTable from "./ui/AnalisisTable";
import ReportStadistics from "../reportes/ui/ReportStadistics";
import ReportGeneralGraphs from "./ui/ReportGeneralGraphs";
import ReportTable from "../reportes/ui/ReportTable";

const ReportTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 35px 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;

function Territorial() {
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

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
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (isLoading | (informes.length < 1))
    return <Loader size="md" center={true} content="Cargando" />;

  return (
    <>
      <div className="card m-4">
        <div className="card-header n-print">
          <div className="d-flex justify-content-center">
            {/* <LocalitySelector
              options={["General", ...secciones]}
              setValue={setSeccion}
              value={seccion}
            /> */}
          </div>
        </div>

        <div className="card-body">
          <ReportTemplate>
            <ReportInfo informe={informes[0]} />

            <Container>
              <h4>Información General de la Tanda</h4>
              <ReportTable informe={{ ...informes[0], sec_resp: "todo" }} />
            </Container>

            <Container>
              <h4>Estadísticas comparativas entre años, mismo trimestre.</h4>
              <ReportStadistics informes={informes} />
            </Container>

            <Container>
              <h4>Gráficas Generales</h4>
              <ReportGeneralGraphs />
            </Container>

            <Container>
              <h4>Gráficas Historicas</h4>
              <ReportGraphs informes={informes} />
            </Container>

            <Container>
              <h4>Mano Amiga</h4>
              <ManoAmigaTable id_batch={informes[0].id_batch} />
            </Container>

            <Container>
              <h4>Analisis de las Localidades</h4>
              <AnalisisTable id_batch={informes[0].id_batch} />
            </Container>
          </ReportTemplate>
        </div>
      </div>
    </>
  );
}

export default Territorial;
