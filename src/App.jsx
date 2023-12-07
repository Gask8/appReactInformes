import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Procesador from "./components/procesador/Procesador";
import Reporte from "./components/reportes/Reporte";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="procesador" element={<Procesador />} />

            <Route
              path="analisis"
              element={<Navigate replace to="/analisis/Territorial" />}
            />
            <Route path="analisis/:idLocalidad" element={<Reporte />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
