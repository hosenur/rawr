import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import "./App.css"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}
