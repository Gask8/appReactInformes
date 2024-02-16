import { useEffect, useState } from "react";
import { getAnalisisData } from "../../../services/apiAnalisis";

function AnalisisTable({ id_batch }) {
  const [informacion, setInformacion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = getAnalisisData(id_batch);
        res.then(
          function (data) {
            setInformacion(data);
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
  }, [id_batch]);

  // console.log(informacion[0].General_Report.localidad);

  const sortedInformacion = informacion.sort((a, b) =>
    a.General_Report.localidad.localeCompare(b.General_Report.localidad)
  );

  //console.log(sortedInformacion);

  if (isLoading | (informacion.length === 0)) return null;

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px 10px 10px",
          borderRadius: "25px",
        }}
      >
        <table
          className="table table-striped text-center line-header"
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="table-primary">
              <th>Localidad</th>
              <th>Análisis</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {sortedInformacion.map((e, i) => (
              <tr key={i}>
                <td>{e.General_Report.localidad}</td>
                <td>{e.analisis}</td>
                <td>{e.accion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AnalisisTable;
