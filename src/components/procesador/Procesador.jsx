import { useState } from "react";
import { processInfo } from "../../utils/helper";

import ProcesadorThead from "./ProcesadorThead";
import { makeInserts } from "./apiProcesador";

function Procesador() {
  const [data, setData] = useState("Adultos Femenino	Acapulco	226	32	24	32					116	4	0	0");
  const [resp, setResp] = useState([]);

  function handleChange(e) {
    setData(e.target.value);
  }

  function handleClick() {
    setResp(processInfo(data));
  }

  async function handleSave() {
    makeInserts(resp);
  }

  return (
    <>
      <div className="container mt-4">
        <div className="card text-center">
          <div className="card-header">Procesar Informacion</div>
          <div className="card-body">
            <h5 className="card-title">Agregar CSV</h5>
            <div className="container d-flex flex-column">
              <label>
                Agregar Informes (separar por filas en formato categoria
                localidad respuesta respuesta etc):
              </label>
              <textarea
                id="data"
                rows="10"
                cols="50"
                name="data"
                onChange={handleChange}
                value={data}
              ></textarea>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleClick}>
              Procesar
            </button>
          </div>
        </div>

        {resp.length > 0 && (
          <div className="card mt-4">
            <div className="card-body">
              <p className="card-title">Respuestas.</p>
              <div id="tcanvas" style={{ overflowX: "scroll" }}>
                <table id="rtable" className="table tabla-stiped">
                  <ProcesadorThead />
                  <tbody>
                    {resp.map((r, i) => (
                      <tr key={i}>
                        {r.map((c, j) => (
                          <td key={j}>{c !== undefined ? c : "n/a"}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <center>
                <button
                  className="btn btn-outline-danger mt-2"
                  onClick={handleSave}
                >
                  Subir
                </button>
              </center>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Procesador;
