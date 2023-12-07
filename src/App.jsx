import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Procesador from "./components/procesador/Procesador";
import Reporte from "./components/reportes/Reporte";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="procesador" />} />
            <Route path="procesador" element={<Procesador />} />

            <Route
              path="analisis"
              element={<Navigate replace to="/analisis/Territorial" />}
            />
            <Route path="analisis/:idLocalidad" element={<Reporte />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
