import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  /* margin-top: 10%; */

  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-sm);
`;

const domain = "https://rcinformetrimestrales.netlify.app";
// const domain = "http://localhost:5173";

function LinkList() {
  return (
    <>
      <Ul>
        <LinkLi name="Territorio" />
      </Ul>
      <Ul>
        <p>Diego Reynoso</p>
        <LinkLi name="Acapulco" />
        <LinkLi name="Campeche" />
        <LinkLi name="Cuernavaca" />
        <LinkLi name="Córdoba" />
        <LinkLi name="Mérida" />
        <LinkLi name="México Poniente" />
        <LinkLi name="México Sur" />
        <LinkLi name="Oaxaca" />
        <LinkLi name="Orizaba" />
        <LinkLi name="Puebla" />
        <LinkLi name="Toluca" />
        <LinkLi name="Veracruz" />
        <LinkLi name="Villahermosa" />
        <LinkLi name="Xalapa" />
      </Ul>
      <Ul>
        <p>Andres Jimenez</p>
        <LinkLi name="Costa Rica" />
        <LinkLi name="Cotija" />
        <LinkLi name="El Salvador" />
        <LinkLi name="Guatemala" />
        <LinkLi name="Lindavista" />
        <LinkLi name="Morelia" />
        <LinkLi name="México Norte" />
        <LinkLi name="Pachuca" />
        <LinkLi name="Querétaro" />
        <LinkLi name="Tapachula" />
        <LinkLi name="Tuxtla Gutiérrez" />
      </Ul>
      <Ul>
        <p>P. Rodolfo Mayagoita</p>
        <LinkLi name="Cancún" />
        <LinkLi name="Chetumal" />
        <LinkLi name="Cozumel" />
        <LinkLi name="Playa del Carmen" />
      </Ul>

      {/* <ul>
        <li>https://rcinformetrimestrales.netlify.app/territorio</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Acapulco</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Campeche</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Cancún</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Chetumal</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Costa Rica</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Cotija</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Cozumel</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Cuernavaca</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Córdoba</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/El Salvador</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Guatemala</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Lindavista</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Morelia</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Mérida</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/México Norte</li>
        <li>
          https://rcinformetrimestrales.netlify.app/analisis/México Poniente
        </li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/México Sur</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Oaxaca</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Orizaba</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Pachuca</li>
        <li>
          https://rcinformetrimestrales.netlify.app/analisis/Playa del Carmen
        </li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Puebla</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Querétaro</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Tapachula</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Toluca</li>
        <li>
          https://rcinformetrimestrales.netlify.app/analisis/Tuxtla Gutiérrez
        </li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Veracruz</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Villahermosa</li>
        <li>https://rcinformetrimestrales.netlify.app/analisis/Xalapa</li>
      </ul> */}
      <div style={{ height: "50px" }}></div>
    </>
  );
}

function LinkLi({ name }) {
  return (
    <li>
      <a href={`${domain}/analisis/${name}`}>{name}</a>
    </li>
  );
}

export default LinkList;
