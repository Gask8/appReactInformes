function InformeRow({ informe }) {
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
    localidad,
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
    Batch: { trimestre, fecha },
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
    <tr>
      <th scope="row">{localidad}</th>
      <td>{`${fecha} - ${trimestre}`}</td>
      {iterator.map((e, i) => (
        <td key={i}>{e}</td>
      ))}
    </tr>
  );
}

export default InformeRow;
