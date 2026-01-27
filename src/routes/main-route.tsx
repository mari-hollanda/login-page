import { Routes, Route } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

export function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
}
