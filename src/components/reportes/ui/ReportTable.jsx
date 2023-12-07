import TfMF from "../../../ui/TdMF";
import ThAJE from "../../../ui/ThAJE";

function ReportTable({ informe }) {
  const {
    colab_f,
    colab_m,
    disc_f,
    disc_m,
    eq_af,
    eq_am,
    eq_ef,
    eq_em,
    eq_jf,
    eq_jm,
    eqm_f,
    eqm_m,
    form_af,
    form_am,
    form_ef,
    form_em,
    form_jf,
    form_jm,
    ma_af,
    ma_am,
    ma_ef,
    ma_em,
    ma_jf,
    ma_jm,
    mis_f,
    mis_m,
    mna_af,
    mna_am,
    mna_ef,
    mna_em,
    mna_jf,
    mna_jm,
    paso_ef,
    paso_em,
    paso_jf,
    paso_jm,
    prom_f,
    prom_m,
    sac_dic,
    sec_resp = "",
  } = informe;

  const iterator = [
    ma_ef,
    ma_em,
    ma_af,
    ma_am,
    ma_jf,
    ma_jm,
    mna_ef,
    mna_em,
    mna_af,
    mna_am,
    mna_jf,
    mna_jm,
    eq_ef,
    eq_em,
    eq_af,
    eq_am,
    eq_jf,
    eq_jm,
    form_ef,
    form_em,
    form_af,
    form_am,
    form_jf,
    form_jm,
    paso_ef,
    paso_em,
    paso_jf,
    paso_jm,
    colab_f,
    colab_m,
    disc_f,
    disc_m,
    prom_f,
    prom_m,
    mis_f,
    mis_m,
    eqm_f,
    eqm_m,
    sac_dic,
  ];

  return (
    <>
      {sec_resp !== "" && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px 10px 10px",
            borderRadius: "25px",
          }}
        >
          <table
            className="table table-striped text-center line-header"
            style={{ width: "100%" }}
          >
            <thead>
              <tr className="table-primary">
                <th colSpan="6">Miembros Asociados</th>
                <th colSpan="6">Miembros No Asociados</th>
                <th colSpan="6">Equipos</th>
                <th colSpan="6">Formadores</th>
              </tr>
              <tr className="table-primary">
                <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
                <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
                <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
                <ThAJE content={["ECYD", "Adultos", "Jóvenes"]} />
              </tr>
              <tr className="table-primary">
                <TfMF times={3} />
                <TfMF times={3} />
                <TfMF times={3} />
                <TfMF times={3} />
              </tr>
            </thead>
            <tbody>
              <tr>
                {iterator.slice(0, 24).map((e, i) => (
                  <td key={i}>{e}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <table
            className="table table-striped text-center line-header"
            style={{ width: "100%" }}
          >
            <thead>
              <tr className="table-primary">
                <th colSpan="4">Pasos</th>
                <th colSpan="11">Entregas</th>
              </tr>
              <tr className="table-primary">
                <ThAJE content={["ECYD Jóvenes", "Jóvenes Adultos"]} />
                <th colSpan="2">Posibles Colaboradores</th>
                <th colSpan="2">Discernimiento Vocacional</th>
                <th colSpan="2">Promesas de Entrega</th>
                <th colSpan="2">Misioneros Permanentes</th>
                <th colSpan="2">Equipos de Matrimonios </th>
                <th>Sacerdotes Diocesanos</th>
              </tr>
              <tr className="table-primary">
                <TfMF times={2} />
                <TfMF times={1} />
                <TfMF times={1} />
                <TfMF times={1} />
                <TfMF times={1} />
                <TfMF times={1} />
                <td>T</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {iterator.slice(24, 40).map((e, i) => (
                  <td key={i}>{e}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ReportTable;
