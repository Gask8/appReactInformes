import Procesador from "./components/procesador/Procesador";
import Informes from "./components/informes/Informes";
import InformesbyL from "./components/informes/InformesbyL";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(0);

  return (
    <>
      <GlobalStyles />
      <AppLayout setMenu={setMenu}>
        {menu === 0 && <Procesador />}
        {menu === 1 && <Informes />}
        {menu === 2 && <InformesbyL />}
      </AppLayout>
    </>
  );
}

export default App;
