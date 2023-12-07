import LocalitySelector from "../../ui/LocalitySelector";
import { localidadesG } from "../../utils/dataArray";
import InformReport from "./ui/InformReport";
import { useParams } from "react-router-dom";

function Reporte() {
  const { idLocalidad: searchLocality } = useParams();

  return (
    <>
      <div className="card m-4">
        <div className="card-header d-flex justify-content-center n-print">
          <LocalitySelector options={["General", "Adultos Masculino"]} />
        </div>

        <InformReport searchLocality={searchLocality} />
      </div>
    </>
  );
}

export default Reporte;
