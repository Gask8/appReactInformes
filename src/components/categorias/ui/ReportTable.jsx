import styled from "styled-components";
import {
  FaFemale,
  FaMale,
  FaUserCheck,
  FaUserFriends,
  FaUserTie,
  // FaWalking,
  FaCross,
  FaChurch,
  FaUsers,
} from "react-icons/fa";
import ElementReportTable from "../../../ui/ElementReportTable";

const StyledAppLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

function ReportTable({ informe, categoria }) {
  const {
    // colab_f,
    // colab_m,
    // disc_f,
    // disc_m,
    eq_af,
    eq_am,
    // eq_ef,
    // eq_em,
    eq_jf,
    eq_jm,
    eqm_f,
    eqm_m,
    form_af,
    form_am,
    // form_ef,
    // form_em,
    form_jf,
    form_jm,
    ma_af,
    ma_am,
    // ma_ef,
    // ma_em,
    ma_jf,
    ma_jm,
    mis_f,
    mis_m,
    mna_af,
    mna_am,
    // mna_ef,
    // mna_em,
    mna_jf,
    mna_jm,
    // paso_ef,
    // paso_em,
    // paso_jf,
    // paso_jm,
    prom_f,
    prom_m,
    sac_dic,
    // sec_resp = "",
  } = informe;

  return (
    <>
      {categoria === "af" && (
        <StyledAppLayout>
          <ElementReportTable
            id="Adultos"
            title="Secciones de Adultos Femenino"
            widthPorcentage="85%"
            colorHeader="#00b41eb3"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#00b41eb3",
                content: [
                  { text: "MUJERES:", number: ma_af, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#00b41eb3",
                content: [
                  { text: "MUJERES:", number: mna_af, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#00b41eb3",
                icon: <FaUsers />,
                content: [
                  { text: "MUJERES:", number: eq_af, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#00b41eb3",
                icon: <FaUserCheck />,
                content: [
                  { text: "MUJERES:", number: form_af, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Equipos de Matrimonios",
                color: "#00b41eb3",
                icon: <FaUserFriends />,
                content: [
                  { text: "MUJERES:", number: eqm_f, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Sacerdotes Diocesanos",
                color: "#00b41eb3",
                icon: <FaChurch />,
                content: [
                  { text: "Sacerdotes:", number: sac_dic, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <hr id="hr" />

          <ElementReportTable
            id="Entregas2"
            title="Entregas"
            widthPorcentage="50%"
            colorHeader="#15365fb3"
            contents={[
              {
                tittle: "Promesas de Entrega",
                color: "#e40fa4",
                icon: <FaUserTie />,
                content: [
                  { text: "MUJERES:", number: prom_f, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Misioneros Permanentes",
                color: "#2f13ce",
                icon: <FaCross />,
                content: [
                  { text: "MUJERES:", number: mis_f, icon: <FaMale /> },
                ],
              },
            ]}
          />
        </StyledAppLayout>
      )}

      {categoria === "am" && (
        <StyledAppLayout>
          <ElementReportTable
            id="Adultos"
            title="Secciones de Adultos Masculino"
            widthPorcentage="85%"
            colorHeader="#00b41eb3"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#00b41eb3",
                content: [
                  { text: "HOMBRES:", number: ma_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#00b41eb3",
                content: [
                  { text: "HOMBRES:", number: mna_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#00b41eb3",
                icon: <FaUsers />,
                content: [
                  { text: "HOMBRES:", number: eq_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#00b41eb3",
                icon: <FaUserCheck />,
                content: [
                  { text: "HOMBRES:", number: form_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos de Matrimonios",
                color: "#00b41eb3",
                icon: <FaUserFriends />,
                content: [
                  { text: "HOMBRES:", number: eqm_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Sacerdotes Diocesanos",
                color: "#00b41eb3",
                icon: <FaChurch />,
                content: [
                  { text: "Sacerdotes:", number: sac_dic, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <hr id="hr" />

          <ElementReportTable
            id="Entregas2"
            title="Entregas"
            widthPorcentage="50%"
            colorHeader="#15365fb3"
            contents={[
              {
                tittle: "Promesas de Entrega",
                color: "#e40fa4",
                icon: <FaUserTie />,
                content: [
                  { text: "HOMBRES:", number: prom_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Misioneros Permanentes",
                color: "#2f13ce",
                icon: <FaCross />,
                content: [
                  { text: "HOMBRES:", number: mis_m, icon: <FaMale /> },
                ],
              },
            ]}
          />
        </StyledAppLayout>
      )}

      {categoria === "jf" && (
        <StyledAppLayout>
          <ElementReportTable
            id="Jóvenes"
            title="Secciones de Jóvenes Masculino"
            widthPorcentage="85%"
            colorHeader="#0d6de4b3"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#0d6de4b3",
                content: [
                  { text: "MUJERES:", number: ma_jf, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#0d6de4b3",
                content: [
                  { text: "MUJERES:", number: mna_jf, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#0d6de4b3",
                icon: <FaUsers />,
                content: [
                  { text: "MUJERES:", number: eq_jf, icon: <FaFemale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#0d6de4b3",
                icon: <FaUserCheck />,
                content: [
                  { text: "MUJERES:", number: form_jf, icon: <FaFemale /> },
                ],
              },
            ]}
          />
          <hr id="hr" />
        </StyledAppLayout>
      )}

      {categoria === "jm" && (
        <StyledAppLayout>
          <ElementReportTable
            id="Jóvenes"
            title="Secciones de Jóvenes Masculino"
            widthPorcentage="85%"
            colorHeader="#0d6de4b3"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#0d6de4b3",
                content: [
                  { text: "HOMBRES:", number: ma_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#0d6de4b3",
                content: [
                  { text: "HOMBRES:", number: mna_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#0d6de4b3",
                icon: <FaUsers />,
                content: [
                  { text: "HOMBRES:", number: eq_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#0d6de4b3",
                icon: <FaUserCheck />,
                content: [
                  { text: "HOMBRES:", number: form_jm, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <hr id="hr" />
        </StyledAppLayout>
      )}
    </>
  );
}

export default ReportTable;
