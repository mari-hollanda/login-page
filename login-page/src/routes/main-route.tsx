import { Routes, Route } from "react-router-dom";
import LoginScreen from "../LoginScreen";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/cadastro" element={<LoginScreen />} />
    </Routes>
  );
}

export default MainRoute;
