import styled from "styled-components";
import {
  FaFemale,
  FaMale,
  FaUserCheck,
  FaUserFriends,
  FaUserTie,
  FaWalking,
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

  return (
    <>
      {sec_resp !== "" && (
        <StyledAppLayout>
          <ElementReportTable
            id="ECYD"
            title="Secciones de ECYD"
            widthPorcentage="48%"
            contents={[
              {
                tittle: "Alianza con Cristo",
                color: "#08dd48",
                content: [
                  { text: "NIÑAS:", number: ma_ef, icon: <FaFemale /> },
                  { text: "NIÑOS:", number: ma_em, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Sin Alianza con Cristo",
                color: "#4c7cff",
                content: [
                  { text: "NIÑAS:", number: mna_ef, icon: <FaFemale /> },
                  { text: "NIÑOS:", number: mna_em, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#ff2163",
                icon: <FaUsers />,
                content: [
                  { text: "NIÑAS:", number: eq_ef, icon: <FaFemale /> },
                  { text: "NIÑOS:", number: eq_em, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#12d6a5",
                icon: <FaUserCheck />,
                content: [
                  { text: "NIÑAS:", number: form_ef, icon: <FaFemale /> },
                  { text: "NIÑOS:", number: form_em, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <ElementReportTable
            id="Jóvenes"
            title="Secciones de Jóvenes"
            widthPorcentage="48%"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#08dd48",
                content: [
                  { text: "MUJERES:", number: ma_jf, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: ma_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#4c7cff",
                content: [
                  { text: "MUJERES:", number: mna_jf, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: mna_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#ff2163",
                icon: <FaUsers />,
                content: [
                  { text: "MUJERES:", number: eq_jf, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: eq_jm, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#12d6a5",
                icon: <FaUserCheck />,
                content: [
                  { text: "MUJERES:", number: form_jf, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: form_jm, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <div style={{ width: "10%" }}></div>
          <ElementReportTable
            id="Adultos"
            title="Secciones de Adultos"
            widthPorcentage="48%"
            contents={[
              {
                tittle: "Miembros Asociados",
                color: "#08dd48",
                content: [
                  { text: "MUJERES:", number: ma_af, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: ma_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Miembros No Asociados",
                color: "#4c7cff",
                content: [
                  { text: "MUJERES:", number: mna_af, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: mna_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos",
                color: "#ff2163",
                icon: <FaUsers />,
                content: [
                  { text: "MUJERES:", number: eq_af, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: eq_am, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Formadores",
                color: "#12d6a5",
                icon: <FaUserCheck />,
                content: [
                  { text: "MUJERES:", number: form_af, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: form_am, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <div style={{ width: "10%" }}></div>
          <ElementReportTable
            id="Pasos"
            title="Pasos"
            widthPorcentage="35%"
            contents={[
              {
                tittle: "ECYD a Jóvenes",
                color: "#8727f5",
                icon: <FaWalking />,
                content: [
                  { text: "MUJERES:", number: paso_ef, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: paso_em, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Jóvenes a Adultos",
                color: "#17c9d6",
                icon: <FaWalking />,
                content: [
                  { text: "MUJERES:", number: paso_jf, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: paso_jm, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <ElementReportTable
            id="Entregas1"
            title="Candidatos a Entregas"
            widthPorcentage="35%"
            contents={[
              {
                tittle: "Posibles Colaboradores",
                color: "#eb6517",
                icon: <FaUserTie />,
                content: [
                  { text: "MUJERES:", number: colab_f, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: colab_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Discernimiento Vocacional",
                color: "#f1e314",
                icon: <FaCross />,
                content: [
                  { text: "MUJERES:", number: disc_f, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: disc_m, icon: <FaMale /> },
                ],
              },
            ]}
          />
          <ElementReportTable
            id="Entregas2"
            title="Entregas"
            widthPorcentage="65%"
            contents={[
              {
                tittle: "Promesas de Entrega",
                color: "#e40fa4",
                icon: <FaUserTie />,
                content: [
                  { text: "MUJERES:", number: prom_f, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: prom_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Misioneros Permanentes",
                color: "#2f13ce",
                icon: <FaCross />,
                content: [
                  { text: "MUJERES:", number: mis_f, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: mis_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Equipos de Matrimonios",
                color: "#ff2163",
                icon: <FaUserFriends />,
                content: [
                  { text: "MUJERES:", number: eqm_f, icon: <FaFemale /> },
                  { text: "HOMBRES:", number: eqm_m, icon: <FaMale /> },
                ],
              },
              {
                tittle: "Sacerdotes Diocesanos",
                color: "#1ef1ce",
                icon: <FaChurch />,
                content: [
                  { text: "Sacerdotes:", number: sac_dic, icon: <FaMale /> },
                ],
              },
            ]}
          />
        </StyledAppLayout>
      )}
    </>
  );
}

export default ReportTable;
