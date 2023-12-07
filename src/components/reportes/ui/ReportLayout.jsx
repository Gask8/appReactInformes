import styled from "styled-components";

import ReportInfo from "./ReportInfo";
import ReportStadistics from "./ReportStadistics";
import ReportGraphs from "./ReportGraphsHistorical";
import ReportPieGraphs from "./ReportGraphsGeneral";
import ReportTable from "./ReportTable";

const ReportTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 35px 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;

function ReportLayout({ informes }) {
  return (
    <ReportTemplate>
      <ReportInfo informe={informes[0]} />
      <Container>
        <h4>Información General de la Tanda</h4>
        <ReportTable informe={informes[0]} />
      </Container>
      <Container>
        <h4>Estadísticas comparativas entre años, mismo trimestre.</h4>
        <ReportStadistics informes={informes} />
      </Container>
      {informes[0].sec_resp !== "" && (
        <Container>
          <h4>Gráficas Generales</h4>
          <ReportPieGraphs informe={informes[0]} />
        </Container>
      )}
      <Container>
        <h4>Gráficas Historicas</h4>
        <ReportGraphs informes={informes} />
      </Container>
    </ReportTemplate>
  );
}

export default ReportLayout;
