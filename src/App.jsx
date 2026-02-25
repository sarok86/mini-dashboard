import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormSignup from "./components/Formsignup";
import Dashboards from "./components/Dashboards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FormLogin />} />
        <Route path="/FormSignup" element={<FormSignup />} />
        <Route path="/Dashboards" element={<Dashboards />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
