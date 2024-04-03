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

function ReportStadistics({ informes }) {
  const {
    Batch: { trimestre },
  } = informes[0];
  const estadisticasPorAno = informes
    .filter((informe) => informe.Batch.trimestre === trimestre)
    .reverse();

  return (
    <DivG>
      {estadisticasPorAno.map((i, ind) => (
        <ElementStafistics key={ind} i={i} />
      ))}
    </DivG>
  );
}

function ElementStafistics({ i }) {
  const ma = i.ma_af;
  const tm = ma + i.mna_af;
  const form = i.form_af;
  const eq = i.eq_af;

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
