import { useParams } from "react-router-dom";
import { useState } from "react";
import { useReportsData } from "./hooks/useReportsData";

import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { traductorAbrebiaciones } from "../../utils/dataArray";
import LocalitySelector from "../../ui/LocalitySelector";
import TrimestralSelector from "../../ui/TrimestralSelector";
import ReportLayout from "./ui/ReportLayout";
import Informe from "../informes/Informe";
import ModalButton from "../../ui/ModalButton";
import ModalAnalisis from "../analisis/ModalAnalisis";
import { dataTrimestral } from "../../utils/dataTrimestral";

function Reporte() {
  const { idLocalidad: searchLocality } = useParams();
  const [informes, setInformes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [seccion, setSeccion] = useState("General");

  useReportsData(searchLocality, setInformes, setIsLoading);

  if (isLoading | (informes.length < 1))
    return <Loader size="md" center={true} content="Cargando" />;

  const id_batch = informes[currentIndex].id_batch;
  const { trimestre, fecha } = informes[currentIndex].Batch;
  const secciones = informes[currentIndex].sec_resp
    .split(",")
    .slice(0, -1)
    .map((x) => traductorAbrebiaciones[x]);

  return (
    <>
      <ModalButton />
      <div className="card m-4">
        <div className="card-header n-print d-flex justify-content-around align-items-center">
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
          <div className="d-flex justify-content-center">
            <TrimestralSelector
              options={dataTrimestral}
              setValue={setCurrentIndex}
              value={currentIndex}
            />
          </div>
        </div>

        <div className="card-body">
          {seccion === "General" ? (
            <ReportLayout informes={informes} currentIndex={currentIndex} />
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
      <ModalAnalisis id_inform={informes[currentIndex].id} />
    </>
  );
}

export default Reporte;
