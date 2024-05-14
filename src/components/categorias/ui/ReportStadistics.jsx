import styled from "styled-components";

const DivF = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 10%;
  text-align: center;
`;

const DivG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Hr = styled.hr`
  border-top: 2px solid #000000;
`;

function ReportStadistics({ informes, categoria }) {
  const {
    Batch: { trimestre },
  } = informes[0];
  const estadisticasPorAno = informes
    .filter((informe) => informe.Batch.trimestre === trimestre)
    .slice(0, 4)
    .reverse();

  return (
    <DivG>
      {estadisticasPorAno.map((i, ind) => (
        <ElementStafistics key={ind} i={i} cat={categoria} />
      ))}
    </DivG>
  );
}

function ElementStafistics({ i, cat }) {
  const ma = i[`ma_${cat}`];
  const tm = ma + i[`mna_${cat}`];
  const form = i[`form_${cat}`];
  const eq = i[`eq_${cat}`];

  return (
    <DivF>
      <h6>{i.Batch.fecha}</h6>
      <Hr />
      <p>
        Miembros Asociados: {""}
        <span>{ma}</span>
      </p>
      <p>
        Total de Miembros: {""}
        <span>{tm}</span>
      </p>
      <p>
        Formadores: <span>{form}</span>
      </p>
      <p>
        Equipos: <span>{eq}</span>
      </p>
    </DivF>
  );
}

export default ReportStadistics;
