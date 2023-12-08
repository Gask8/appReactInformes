import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Procesador from "./components/procesador/Procesador";
import Reporte from "./components/reportes/Reporte";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import Error from "./components/Error";
import { Toaster } from "react-hot-toast";

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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
