import { useEffect, useState } from "react";
import { getManoAmigaData } from "../../../services/apiManoAmiga";

function ManoAmigaTable({ id_batch }) {
  const [informacion, setInformacion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = getManoAmigaData(id_batch);
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
              <th>Territorio</th>
              <th>Miembros Asociados</th>
              <th>Miembros No Asociados</th>
              <th>Equipos</th>
              <th>Formadores</th>
              <th>Colaboradores</th>
              <th>Discernimiento</th>
              <th>Pasos de Etapa</th>
            </tr>
          </thead>
          <tbody>
            {informacion.map((e, i) => (
              <tr key={i}>
                <td>{e.territorio}</td>
                <td>{e.miembros_a}</td>
                <td>{e.miembros_na}</td>
                <td>{e.equipos + e.equipos_m}</td>
                <td>{e.formadores}</td>
                <td>{e.colab}</td>
                <td>{e.disc}</td>
                <td>{e.pasos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManoAmigaTable;
