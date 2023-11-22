import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 1rem 1.8rem 4.4rem;
  overflow: scroll;
`;

const Header = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-around;
`;

function AppLayout({ setMenu, children }) {
  return (
    <StyledAppLayout>
      <Header className="n-print">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setMenu(0)}
        >
          Procesar
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setMenu(1)}
        >
          Ver Todo
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setMenu(2)}
        >
          Por Localidad
        </button>
      </Header>
      <Main>{children}</Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
