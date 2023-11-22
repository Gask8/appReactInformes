import { useState } from "react";
import { createManyInforms } from "../../services/apiInformes";
import { processInfo } from "../../utils/helper";
import { dataHeader } from "../../utils/dataArray";

import ProcesadorThead from "./ProcesadorThead";

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
    try {
      let inserts = [];
      let send = resp;
      send.forEach((e) => {
        e.forEach((f, i) => {
          if (f === undefined) e[i] = 0;
        });
      });
      //send.unshift(dataHeader);
      send.forEach((e) => {
        inserts.push(e.reduce((a, v, i) => ({ ...a, [dataHeader[i]]: v }), {}));
      });
      createManyInforms(inserts);
    } catch (err) {
      console.error(err);
    }
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
