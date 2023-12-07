import { traductorAbrebiaciones } from "../../../utils/dataArray";

function ReportInfo({ informe }) {
  const {
    localidad = "Territorial",
    sec_resp = "",
    Batch: { trimestre, fecha },
  } = informe;

  return (
    <div className="card-title">
      <h1 className="text-center">{localidad}</h1>
      <h4 className="text-center">{`${fecha} / ${trimestre}`}</h4>
      <h6>Secciones que contestaron el informe:</h6>
      <p className="d-flex justify-content-center gap-3">
        {sec_resp === "" && <span>Ninguna Seccion</span>}
        {sec_resp !== "" &&
          sec_resp
            .split(",")
            .slice(0, -1)
            .map((e, i) => <span key={i}>{traductorAbrebiaciones[e]}</span>)}
      </p>
      <pre className="my-3" style={{ marginLeft: "60%" }}>
        {`*El Informe muestra únicamente la información que fue
adquirida por las secciones que contestaron. Si los números
no reflejan la realidad, el motivo es la falta de informe.`}
      </pre>
    </div>
  );
}

export default ReportInfo;
