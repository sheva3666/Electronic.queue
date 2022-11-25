import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </>
   
  );
}

export default App;
