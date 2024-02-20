export function reportsReducer(reports = []) {
  const generalView = reports.reduce((acc, report) => {
    const index = acc.findIndex((v) => {
      return v.id === report.Batch.id;
    });
    if (index === -1) {
      acc.push({
        id: report.Batch.id,
        id_batch: report.Batch.id,
        Batch: report.Batch,
        ma_ef: report.ma_ef,
        ma_em: report.ma_em,
        ma_af: report.ma_af,
        ma_am: report.ma_am,
        ma_jf: report.ma_jf,
        ma_jm: report.ma_jm,
        mna_ef: report.mna_ef,
        mna_em: report.mna_em,
        mna_af: report.mna_af,
        mna_am: report.mna_am,
        mna_jf: report.mna_jf,
        mna_jm: report.mna_jm,
        eq_ef: report.eq_ef,
        eq_em: report.eq_em,
        eq_af: report.eq_af,
        eq_am: report.eq_am,
        eq_jf: report.eq_jf,
        eq_jm: report.eq_jm,
        form_ef: report.form_ef,
        form_em: report.form_em,
        form_af: report.form_af,
        form_am: report.form_am,
        form_jf: report.form_jf,
        form_jm: report.form_jm,
        paso_ef: report.paso_ef,
        paso_em: report.paso_em,
        paso_jf: report.paso_jf,
        paso_jm: report.paso_jm,
        colab_f: report.colab_f,
        colab_m: report.colab_m,
        disc_f: report.disc_f,
        disc_m: report.disc_m,
        eqm_f: report.eqm_f,
        eqm_m: report.eqm_m,
        mis_f: report.mis_f,
        mis_m: report.mis_m,
        prom_f: report.prom_f,
        prom_m: report.prom_m,
        sac_dic: report.sac_dic,
      });
    } else {
      acc[index].ma_ef += report.ma_ef;
      acc[index].ma_em += report.ma_em;
      acc[index].ma_af += report.ma_af;
      acc[index].ma_am += report.ma_am;
      acc[index].ma_jf += report.ma_jf;
      acc[index].ma_jm += report.ma_jm;
      acc[index].mna_ef += report.mna_ef;
      acc[index].mna_em += report.mna_em;
      acc[index].mna_af += report.mna_af;
      acc[index].mna_am += report.mna_am;
      acc[index].mna_jf += report.mna_jf;
      acc[index].mna_jm += report.mna_jm;
      acc[index].eq_ef += report.eq_ef;
      acc[index].eq_em += report.eq_em;
      acc[index].eq_af += report.eq_af;
      acc[index].eq_am += report.eq_am;
      acc[index].eq_jf += report.eq_jf;
      acc[index].eq_jm += report.eq_jm;
      acc[index].form_ef += report.form_ef;
      acc[index].form_em += report.form_em;
      acc[index].form_af += report.form_af;
      acc[index].form_am += report.form_am;
      acc[index].form_jf += report.form_jf;
      acc[index].form_jm += report.form_jm;
      acc[index].paso_ef += report.paso_ef;
      acc[index].paso_em += report.paso_em;
      acc[index].paso_jf += report.paso_jf;
      acc[index].paso_jm += report.paso_jm;
      acc[index].colab_f += report.colab_f;
      acc[index].colab_m += report.colab_m;
      acc[index].disc_f += report.disc_f;
      acc[index].disc_m += report.disc_m;
      acc[index].eqm_f += report.eqm_f;
      acc[index].eqm_m += report.eqm_m;
      acc[index].mis_f += report.mis_f;
      acc[index].mis_m += report.mis_m;
      acc[index].prom_f += report.prom_f;
      acc[index].prom_m += report.prom_m;
      acc[index].sac_dic += report.sac_dic;
    }
    return acc;
  }, []);

  return generalView.sort((a, b) => b.id - a.id);
}
