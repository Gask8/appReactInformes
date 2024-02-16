import { useEffect, useState } from "react";
import { getReports } from "../../services/apiInformes";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import InformeRow from "../informes/ui/InformeRow";
import InformeThead from "../informes/ui/InformeThead";
import SearachBar from "../../ui/SearchBar";
import Select from "../../ui/Select";

function Informes() {
  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [sortedValue, setSortedValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = getReports();
        res.then(
          function (data) {
            setInformes(data);
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
  }, []);

  let filteredData;
  filterValue === ""
    ? (filteredData = informes)
    : (filteredData = informes.filter(
        (informe) =>
          informe.localidad.toLowerCase().includes(filterValue.toLowerCase()) |
          informe.fecha.includes(filterValue.toLowerCase()) |
          informe.trimestre.toLowerCase().includes(filterValue.toLowerCase())
      ));

  const [field, direction] = sortedValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedData = filteredData.sort((a, b) =>
    a[field] > b[field] ? 1 * modifier : -1 * modifier
  );

  if (isLoading) return <Loader center size="md" content="Cargando" />;
  return (
    <>
      <div className="card m-4">
        <div className="card-body">
          <div className="my-2 d-flex justify-content-between align-items-center">
            <p className="card-title">Todos los Informes:</p>
            <Select
              setValue={setSortedValue}
              options={[
                { value: "localidad-asc", label: "Ordenar Localidad (A-Z)" },
                { value: "localidad-desc", label: "Ordenar Localidad (Z-A)" },
                { value: "fecha-asc", label: "Ordenar Fecha (A-Z)" },
                { value: "fecha-desc", label: "Ordenar Fecha (Z-A)" },
              ]}
            />
            <SearachBar setFilter={setFilterValue} />
          </div>
          <div id="tcanvas" style={{ overflowX: "scroll" }}>
            <table
              id="allInfo"
              className="table table-striped text-center"
              style={{ width: "200vw" }}
            >
              <InformeThead />
              <tbody>
                {sortedData.map((e) => (
                  <InformeRow key={e.id} informe={e} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informes;
