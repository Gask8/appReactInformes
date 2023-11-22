import { useState } from "react";
import LocalitySelector from "../../ui/LocalitySelector";
import { localidadesG } from "../../utils/dataArray";
import InformReport from "./ui/InformReport";

function InformesbyL() {
  const [searchLocality, setSearchLocality] = useState("Acapulco");

  return (
    <>
      <div className="card m-4">
        <div className="card-header d-flex justify-content-center n-print">
          <LocalitySelector
            setValue={setSearchLocality}
            options={localidadesG}
          />
        </div>

        <InformReport searchLocality={searchLocality} />
      </div>
    </>
  );
}

export default InformesbyL;
