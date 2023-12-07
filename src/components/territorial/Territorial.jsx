import LocalitySelector from "../../ui/LocalitySelector";
import { localidadesG } from "../../utils/dataArray";
import InformReport from "./ui/InformReport";
import { useParams } from "react-router-dom";

function Territorial() {
  const { idLocalidad: searchLocality } = useParams();

  return (
    <>
      <div className="card m-4">
        <div className="card-header d-flex justify-content-center n-print">
          <LocalitySelector options={localidadesG} />
        </div>

        <InformReport searchLocality={searchLocality} />
      </div>
    </>
  );
}

export default Territorial;
