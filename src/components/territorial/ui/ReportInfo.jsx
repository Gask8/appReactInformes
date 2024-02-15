import { useEffect, useState } from "react";
import { getHowManyInforms } from "../../../services/apiInformes";

function ReportInfo({ informe }) {
  const {
    id_batch,
    Batch: { trimestre, fecha },
  } = informe;

  const [allSeccions, setAllSeccions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const res = getHowManyInforms(id_batch);
        res.then(
          function (data) {
            setAllSeccions(data);
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

  if (isLoading | (allSeccions.length < 1)) return;

  const howManySeccions = allSeccions.reduce(
    (acc, el) => {
      acc[el.seccion]++;
      return acc;
    },
    {
      "Adultos Femenino": 0,
      "Adultos Masculino": 0,
      "ECYD Femenino": 0,
      "ECYD Masculino": 0,
      "Jóvenes Femenino": 0,
      "Jóvenes Masculino": 0,
    }
  );

  return (
    <>
      <div className="card-title">
        <h1 className="text-center">Reporte General</h1>
        <h4 className="text-center">{`${fecha} / ${trimestre}`}</h4>
        <p>Secciones que contestaron el informe:</p>
        <p className="d-flex justify-content-center gap-3">
          {`Total: ${allSeccions.length}/161`}
        </p>
        <p className="d-flex justify-content-center gap-3">
          {`ECYD Femenino: ${howManySeccions["ECYD Femenino"]}/25 - `}
          {`ECYD Masculino: ${howManySeccions["ECYD Masculino"]}/20 - `}
          {`Jóvenes Femenino: ${howManySeccions["Jóvenes Femenino"]}/29 - `}
          {`Jóvenes Masculino: ${howManySeccions["Jóvenes Masculino"]}/30 - `}
          {`Adultos Femenino: ${howManySeccions["Adultos Femenino"]}/28 - `}
          {`Adultos Masculino: ${howManySeccions["Adultos Masculino"]}/30`}
        </p>
        <pre className="my-3" style={{ marginLeft: "60%" }}>
          {`*El Informe muestra únicamente la información que fue
adquirida por las secciones que contestaron. Si los números
no reflejan la realidad, el motivo es la falta de informe.`}
        </pre>
      </div>
    </>
  );
}

export default ReportInfo;
