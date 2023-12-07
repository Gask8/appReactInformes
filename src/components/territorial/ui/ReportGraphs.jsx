import Chart from "../../../ui/Chart";
import styled from "styled-components";
import Accordion from "../../../ui/Accordion";

const Container = styled.div``;

const Grid3 = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  justify-content: space-between;
`;

const GridE = styled.div`
  width: 49%;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  background-color: #fff;
`;

function ReportGraphs({ informes }) {
  const labels = informes
    .map((i) => `${i.Batch.trimestre} - ${i.Batch.fecha}`)
    .reverse();
  // let itarator = [
  //   {
  //     title: "Misioneros Permanentes",
  //     data1: informes.map((i) => i.mis_m).reverse(),
  //     data2: informes.map((i) => i.mis_f).reverse(),
  //   },
  //   {
  //     title: "Sacerdotes Diocesianos",
  //     data1: informes.map((i) => i.sac_dic).reverse(),
  //     data2: informes.map((i) => i.sac_dic).reverse(),
  //   },
  // ];
  let itaratorECYD = [
    {
      title: "Miembros Asociados ECYD",
      data1: informes.map((i) => i.ma_em).reverse(),
      data2: informes.map((i) => i.ma_ef).reverse(),
    },
    {
      title: "Miembros NO Asociados ECYD",
      data1: informes.map((i) => i.mna_em).reverse(),
      data2: informes.map((i) => i.mna_ef).reverse(),
    },
    {
      title: "Equipos ECYD",
      data1: informes.map((i) => i.eq_em).reverse(),
      data2: informes.map((i) => i.eq_ef).reverse(),
    },
    {
      title: "Formadores ECYD",
      data1: informes.map((i) => i.form_em).reverse(),
      data2: informes.map((i) => i.form_ef).reverse(),
    },
  ];
  let itaratorJovenes = [
    {
      title: "Miembros Asociados Jóvenes",
      data1: informes.map((i) => i.ma_jm).reverse(),
      data2: informes.map((i) => i.ma_jf).reverse(),
    },
    {
      title: "Miembros NO Asociados Jóvenes",
      data1: informes.map((i) => i.mna_jm).reverse(),
      data2: informes.map((i) => i.mna_jf).reverse(),
    },

    {
      title: "Equipos Jóvenes",
      data1: informes.map((i) => i.eq_jm).reverse(),
      data2: informes.map((i) => i.eq_jf).reverse(),
    },
    {
      title: "Formadores Jóvenes",
      data1: informes.map((i) => i.form_jm).reverse(),
      data2: informes.map((i) => i.form_jf).reverse(),
    },
  ];
  let itaratorAdultos = [
    {
      title: "Miembros Asociados RC Adultos",
      data1: informes.map((i) => i.ma_am).reverse(),
      data2: informes.map((i) => i.ma_af).reverse(),
    },
    {
      title: "Miembros NO Asociados RC Adultos",
      data1: informes.map((i) => i.mna_am).reverse(),
      data2: informes.map((i) => i.mna_af).reverse(),
    },

    {
      title: "Equipos RC Adultos",
      data1: informes.map((i) => i.eq_am).reverse(),
      data2: informes.map((i) => i.eq_af).reverse(),
    },
    {
      title: "Formadores RC Adultos",
      data1: informes.map((i) => i.form_am).reverse(),
      data2: informes.map((i) => i.form_af).reverse(),
    },
  ];
  let itaratorPasos = [
    {
      title: "Pasos ECYD - Jóvenes",
      data1: informes.map((i) => i.paso_em).reverse(),
      data2: informes.map((i) => i.paso_ef).reverse(),
    },
    {
      title: "Pasos Jóvenes - Adultos",
      data1: informes.map((i) => i.paso_jm).reverse(),
      data2: informes.map((i) => i.paso_jf).reverse(),
    },
  ];
  let itaratorEntregas = [
    {
      title: "Posibles Colaboradores",
      data1: informes.map((i) => i.colab_m).reverse(),
      data2: informes.map((i) => i.colab_f).reverse(),
    },
    {
      title: "Discernimiento Vocacional",
      data1: informes.map((i) => i.disc_m).reverse(),
      data2: informes.map((i) => i.disc_f).reverse(),
    },
    {
      title: "Promesa de Entrega",
      data1: informes.map((i) => i.prom_m).reverse(),
      data2: informes.map((i) => i.prom_f).reverse(),
    },
    {
      title: "Equipos de Matrimonio",
      data1: informes.map((i) => i.eqm_m).reverse(),
      data2: informes.map((i) => i.eqm_f).reverse(),
    },
  ];

  return (
    <Container>
      <h4>Graficos:</h4>
      <Accordion id="accordion-stadistics">
        <Accordion.Item idName="ecyd">
          <Accordion.Header>ECYD</Accordion.Header>
          <Accordion.Content>
            <Grid3>
              {itaratorECYD.map((i) => (
                <GridE key={i.title}>
                  <Chart
                    data1={i.data1}
                    data2={i.data2}
                    labels={labels}
                    title={i.title}
                  />
                </GridE>
              ))}
            </Grid3>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item idName="jovenes">
          <Accordion.Header>RC Jóvenes</Accordion.Header>
          <Accordion.Content>
            <Grid3>
              {itaratorJovenes.map((i) => (
                <GridE key={i.title}>
                  <Chart
                    data1={i.data1}
                    data2={i.data2}
                    labels={labels}
                    title={i.title}
                  />
                </GridE>
              ))}
            </Grid3>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item idName="adultos">
          <Accordion.Header>RC Adultos</Accordion.Header>
          <Accordion.Content>
            <Grid3>
              {itaratorAdultos.map((i) => (
                <GridE key={i.title}>
                  <Chart
                    data1={i.data1}
                    data2={i.data2}
                    labels={labels}
                    title={i.title}
                  />
                </GridE>
              ))}
            </Grid3>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item idName="pasos">
          <Accordion.Header>Pasos</Accordion.Header>
          <Accordion.Content>
            <Grid3>
              {itaratorPasos.map((i) => (
                <GridE key={i.title}>
                  <Chart
                    data1={i.data1}
                    data2={i.data2}
                    labels={labels}
                    title={i.title}
                  />
                </GridE>
              ))}
            </Grid3>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item idName="entregas">
          <Accordion.Header>Entregas</Accordion.Header>
          <Accordion.Content>
            <Grid3>
              {itaratorEntregas.map((i) => (
                <GridE key={i.title}>
                  <Chart
                    data1={i.data1}
                    data2={i.data2}
                    labels={labels}
                    title={i.title}
                  />
                </GridE>
              ))}
            </Grid3>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default ReportGraphs;
