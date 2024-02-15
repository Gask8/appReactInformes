import { useParams } from "react-router-dom";
import { useState } from "react";
import { useReportsData } from "./hooks/useReportsData";

import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { traductorAbrebiaciones } from "../../utils/dataArray";
import LocalitySelector from "../../ui/LocalitySelector";
import ReportLayout from "./ui/ReportLayout";
import Informe from "../informes/Informe";
import ModalButton from "../../ui/ModalButton";
import ModalAnalisis from "../analisis/ModalAnalisis";

function Reporte() {
  const { idLocalidad: searchLocality } = useParams();
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seccion, setSeccion] = useState("General");

  useReportsData(searchLocality, setInformes, setIsLoading);

  if (isLoading | (informes.length < 1))
    return <Loader size="md" center={true} content="Cargando" />;

  const id_batch = informes[0].id_batch;
  const { trimestre, fecha } = informes[0].Batch;
  const secciones = informes[0].sec_resp
    .split(",")
    .slice(0, -1)
    .map((x) => traductorAbrebiaciones[x]);

  return (
    <>
      <ModalButton />
      <div className="card m-4">
        <div className="card-header n-print">
          <div className="d-flex justify-content-end">
            <p>{`${fecha} / ${trimestre}`}</p>
          </div>
          <div className="d-flex justify-content-center">
            <LocalitySelector
              options={["General", ...secciones]}
              setValue={setSeccion}
              value={seccion}
            />
          </div>
        </div>

        <div className="card-body">
          {seccion === "General" ? (
            <ReportLayout informes={informes} />
          ) : (
            <Informe
              options={{
                id: id_batch,
                seccion: seccion,
                localidad: searchLocality,
              }}
            />
          )}
        </div>
      </div>
      <ModalAnalisis id_inform={informes[0].id} />
    </>
  );
}

export default Reporte;
