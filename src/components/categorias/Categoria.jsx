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
import { localidades } from "../../utils/dataArray.js";

const ReportTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 35px 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;

function Categoria() {
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const res = getAllReports();
        res.then(
          function (data) {
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

  console.log(informes[0]);

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
            <CategoriaInfo informe={informes[currentIndex]} />

            <Container>
              <h4>Información General de la Tanda</h4>
              <ReportTable
                informe={{ ...informes[currentIndex], sec_resp: "todo" }}
              />
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
              <h4>Informes</h4>
              <Accordion id="accordion-informes">
                {localidades.map((localidad, i) => (
                  <Accordion.Item key={i} idName={localidad}>
                    <Accordion.Header>{localidad}</Accordion.Header>
                    <Accordion.Content>
                      <Informe
                        options={{
                          id: 29,
                          seccion: "Adultos Femenino",
                          localidad: localidad,
                        }}
                      />
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>

            {/* <Container>
              <h4>Gráficas Historicas</h4>
              <ReportGraphs informes={informes} />
            </Container> */}
          </ReportTemplate>
        </div>
      </div>
    </>
  );
}

export default Categoria;
