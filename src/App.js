import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoardPage from "./Pages/DashBoardPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import DataContext from "./DataContext";
import ErrorPage from "./Pages/ErrorPage";
import ShowAndEditTabel from "./Pages/ShowAndEditTabel";
import NavBar from "./components/NavBar";

export const Context = createContext();

function App() {
  const contextValue = DataContext();
  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/DashBoard" element={<DashBoardPage />} />
          <Route path="/ShowAndEditTabel" element={<ShowAndEditTabel />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
