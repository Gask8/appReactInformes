import { dataHeader } from "../../utils/dataArray";
function ProcesadorThead() {
  return (
    <thead>
      <tr className="table-primary">
        {dataHeader.map((it, i) => (
          <td key={i}>{it}</td>
        ))}
      </tr>
    </thead>
  );
}

export default ProcesadorThead;
