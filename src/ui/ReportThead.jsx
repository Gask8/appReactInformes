import TfMF from "./TdMF";
import ThAJE from "./ThAJE";

function InformeThead() {
  return (
    <thead>
      <tr className="table-primary">
        <th colSpan="2"></th>
        <th colSpan="6">Miembros Asociados</th>
        <th colSpan="6">Miembros No Asociados</th>
        <th colSpan="6">Equipos</th>
        <th colSpan="6">Formadores</th>
        <th colSpan="4">Pasos</th>
        <th colSpan="11">Entregas</th>
      </tr>
      <tr className="table-primary">
        <th colSpan="2">General</th>
        <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
        <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
        <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
        <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
        <ThAJE content={["E->J", "J->A"]} />
        <th colSpan="2">Posibles Colaboradores</th>
        <th colSpan="2">Discernimiento Vocacional</th>
        <th colSpan="2">Promesas de Entrega</th>
        <th colSpan="2">Misioneros Permanentes</th>
        <th colSpan="2">Equipos de Matrimonios </th>
        <th>Sacerdotes Diocesanos</th>
      </tr>
      <tr className="table-primary">
        <td>Localidad</td>
        <td>Fecha - Trimestre</td>
        <TfMF times={3} />
        <TfMF times={3} />
        <TfMF times={3} />
        <TfMF times={3} />
        <TfMF times={2} />
        <TfMF times={1} />
        <TfMF times={1} />
        <TfMF times={1} />
        <TfMF times={1} />
        <TfMF times={1} />
        <td>T</td>
      </tr>
    </thead>
  );
}

export default InformeThead;
