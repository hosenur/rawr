import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppwriteProvider } from "react-appwrite";
import Login from "./pages/auth/Login";
import "./App.css";
import client from "./utils/appwrite";
export default function App() {
  return (
    <AppwriteProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/login" Component={Login} />
        </Routes>
      </Router>
    </AppwriteProvider>
  );
}
