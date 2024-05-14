import { useEffect, useState } from "react";
import { getAllReports } from "../../services/apiReportes";
import styled from "styled-components";
import TrimestralSelector from "../../ui/TrimestralSelector";

import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

// import ReportGraphs from "../reportes/ui/ReportGraphsHistorical";
import CategoriaInfo from "./ui/CategoriaInfo";
import ReportStadistics from "./ui/ReportStadistics";
import ReportGeneralGraphs from "./ui/ReportGeneralGraphs";
import ReportTable from "./ui/ReportTable.jsx";
import { reportsReducer } from "../../utils/reportsReducer";
import { dataTrimestral } from "../../utils/dataTrimestral";
import Accordion from "../../ui/Accordion.jsx";

import Informe from "./ui/Informes";
import { useParams } from "react-router-dom";
import { traductorAbrebiaciones } from "../../utils/dataArray.js";

const ReportTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 35px 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;

function Categoria() {
  const { idCategoria } = useParams();

  const [informes, setInformes] = useState([]);
  const [sec, setSec] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const res = getAllReports();
        res.then(
          function (data) {
            setSec(data);
            setInformes(reportsReducer(data));
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

  const idBatch = informes[0].id;
  const localList = sec
    .filter((i) => i.id_batch === idBatch)
    .filter((i) => i.sec_resp.includes(idCategoria))
    .map((i) => i.localidad);

  return (
    <>
      <div className="card m-4">
        <div className="card-header n-print">
          <div className="d-flex justify-content-center">
            <TrimestralSelector
              options={dataTrimestral}
              setValue={setCurrentIndex}
              value={currentIndex}
            />
          </div>
        </div>

        <div className="card-body">
          <ReportTemplate>
            <CategoriaInfo
              informe={informes[currentIndex]}
              categoria={idCategoria}
            />

            <Container>
              <h4>Información General de la Tanda</h4>
              <ReportTable
                informe={{ ...informes[currentIndex], sec_resp: "todo" }}
                categoria={idCategoria}
              />
            </Container>

            <Container>
              <h4>Estadísticas comparativas entre años, mismo trimestre.</h4>
              <ReportStadistics informes={informes} categoria={idCategoria} />
            </Container>

            <Container>
              <h4>Gráficas Generales</h4>
              <ReportGeneralGraphs />
            </Container>

            <Container>
              <h4>Informes</h4>
              <Accordion id="accordion-informes">
                {localList.map((localidad, i) => (
                  <Accordion.Item key={i} idName={localidad.replace(" ", "")}>
                    <Accordion.Header>{localidad}</Accordion.Header>
                    <Accordion.Content>
                      <Informe
                        options={{
                          id: idBatch,
                          seccion: traductorAbrebiaciones[idCategoria],
                          localidad: localidad,
                        }}
                      />
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </ReportTemplate>
        </div>
      </div>
    </>
  );
}

export default Categoria;
