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
    <div>
      <h4>Estadísticas comparativas entre años, mismo trimestre.</h4>
      <DivG>
        {estadisticasPorAno.map((i, ind) => (
          <ElementStafistics key={ind} i={i} />
        ))}
      </DivG>
    </div>
  );
}

function ElementStafistics({ i }) {
  const ma = i.ma_ef + i.ma_em + i.ma_af + i.ma_am + i.ma_jf + i.ma_jm;
  const tm =
    ma + i.mna_ef + i.mna_em + i.mna_af + i.mna_am + i.mna_jf + i.mna_jm;
  const form =
    i.form_ef + i.form_em + i.form_af + i.form_am + i.form_jf + i.form_jm;
  const eq = i.eq_ef + i.eq_em + i.eq_af + i.eq_am + i.eq_jf + i.eq_jm;

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
