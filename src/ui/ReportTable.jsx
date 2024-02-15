import InformeRow from "./ReportRow";
import InformeThead from "./ReportThead";

function ReporTable({ informes }) {
  return (
    <div id="tcanvas" style={{ overflowX: "scroll" }}>
      <table
        id="allInfo"
        className="table table-striped text-center"
        style={{ width: "200vw" }}
      >
        <InformeThead />
        <tbody>
          {informes.map((e) => (
            <InformeRow key={e.id} informe={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReporTable;
