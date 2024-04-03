import { useEffect, useState } from "react";
import { getBatchInforms } from "../../../services/apiInformes";
import styled from "styled-components";

import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Accordion from "../../../ui/Accordion";

const InformTemplate = styled.div`
  background-color: #f4f4f4;
  padding: 10px 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;

function Informe({ options }) {
  const [informe, setInforme] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = getBatchInforms(options);
        res.then(
          function (data) {
            setInforme(data);
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
  }, [options]);

  if (isLoading | (Object.keys(informe).length === 0))
    return <Loader size="md" center={true} content="Cargando" />;

  return (
    <InformTemplate>
      <Container>
        <Accordion id="accordion-inform">
          <Accordion.Item idName="cuantitativo">
            <Accordion.Header>Información Cuantitativa</Accordion.Header>
            <Accordion.Content>
              <TableCuant informe={informe} />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item idName="cualitativo">
            <Accordion.Header>Información Cualitativo</Accordion.Header>
            <Accordion.Content>
              <TableCuanl informe={informe} />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Container>
    </InformTemplate>
  );
}

function TableCuant({ informe }) {
  const {
    ma,
    mna,
    eq,
    form,
    formn,
    paso,
    colab,
    disc,
    prom,
    mis,
    sac_dic,
    eqm,
  } = informe;

  return (
    <table
      className="table n-selector"
      style={{ width: "55%", margin: "0 auto" }}
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pregunta</th>
          <th scope="col">Respuesta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            Número de miembros activos asociados a RC (antes llamado
            "incorporados") (cumpliendo con lo estipulado en el #20 del RFAFRC),
            o con Alianza con Cristo en ECyD (cumpliendo con lo estipulado en
            el#15 del EE):
          </td>
          <td>{ma}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>
            Número de miembros activos NO asociados a RC (quienes participan
            pero no han hecho el acto deasociación), o quienes NO han hecho la
            Alianza con Cristo en ECyD:
          </td>
          <td>{mna}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Número de equipos activos:</td>
          <td>{eq}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>
            Número de formadores(as) activos (en ECyD: responsables y mesa
            directiva; en Reino: formadores engeneral):
          </td>
          <td>{form}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>
            Número de formadores(as) que NO son RC (Ej. miembros de mesa
            directiva, mamás noasociadas, etc.):
          </td>
          <td>{formn}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Número de miembros pasando a la siguiente etapa</td>
          <td>{paso}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>
            Número de jóvenes interesados en ser colaboradores(as) este año:
          </td>
          <td>{colab}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Número de jóvenes en discernimiento vocacional para este año:</td>
          <td>{disc}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>
            Número de miembros activos asociados, con promesa de entrega
            (cumpliendocon lo estipulado en el #25 del RFAFRC):
          </td>
          <td>{prom}</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>
            Número de misioneros(as) permanentes (antes llamado "segundo grado
            tercer matiz"):
          </td>
          <td>{mis}</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>
            Número de sacerdotes diocesanos activos como miembros (cumpliendo
            con loestipulado en el #47 del RFAFRC):
          </td>
          <td>{sac_dic}</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>
            Número de equipos de matrimonios (cumpliendo con lo estipulado en el
            #30 del RFAFRC):
          </td>
          <td>{eqm}</td>
        </tr>
      </tbody>
    </table>
  );
}

function TableCuanl({ informe }) {
  const {
    vida_de_seccion,
    formacion_formadores,
    pastoral_vocacional,
    apostoles_jovenes,
    matrimonios_apostoles,
    afavor_de_la_vida,
    otro_campo_prioritario,
    acciones_y_metas,
    comentarios,
  } = informe;

  return (
    <table
      className="table n-selector"
      style={{ width: "90%", margin: "0 auto" }}
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pregunta</th>
          <th scope="col">Respuesta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">12</th>
          <td>
            Describa la situación de la "vida de sección" (vida espiritual,
            formación, apostolado, acompañamiento yvida de equipo) y cómo se va
            desarrollando cada elemento (mencionar aciertos, logros, retos,
            dificultades).
          </td>
          <td>{vida_de_seccion.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">13</th>
          <td>
            Describa la situación de la "formación de los formadores" (en ECyD:
            responsables y mesa directiva; enReino: formadores en general)
            (mencionar aciertos, logros, retos, dificultades).
          </td>
          <td>{formacion_formadores.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">14</th>
          <td>
            Describa la situación de la "pastoral vocacional" (avances, métodos
            implementados y frutos percibidos;de la promoción vocacional,
            acompañamiento y oración por las vocaciones) de acuerdo con lo
            estipuladoen el #48 de los EFRC.
          </td>
          <td>{pastoral_vocacional.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>
            Describa la situación y avances del campo "formar apóstoles jóvenes
            para jóvenes".
          </td>
          <td>{apostoles_jovenes.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">16</th>
          <td>
            Describa la situación y avances del campo "formar matrimonios
            apóstoles para sus hijos".
          </td>
          <td>{matrimonios_apostoles.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">17</th>
          <td>
            Describa la situación y avances del campo "trabajo a favor de la
            vida y la familia".
          </td>
          <td>{afavor_de_la_vida.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">18</th>
          <td>
            ¿Qué otro campo prioritario crees que sea necesario abarcar en tu
            sección?
          </td>
          <td>{otro_campo_prioritario.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">19</th>
          <td>
            ¿Qué acciones y metas les gustaría abarcar para el siguiente
            trimestre? ¿Qué próximos proyectos tienen en puerta? O les gustaría
            desarrollar.
          </td>
          <td>{acciones_y_metas.replaceAll(/\|/g, "\n")}</td>
        </tr>
        <tr>
          <th scope="row">20</th>
          <td>Comentarios, dudas y sugerencias</td>
          <td>{comentarios.replaceAll(/\|/g, "\n")}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Informe;
