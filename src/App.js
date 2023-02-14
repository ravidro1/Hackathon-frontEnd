import { createContext } from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import DashBoardPage from "./Pages/DashBoardPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import DataContext from "./DataContext";

export const Context = createContext()

function App() {
  const contextValue = DataContext()
  return (
    <Context.Provider value={contextValue}>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/DashBoard" element={<DashBoardPage />} />
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;
