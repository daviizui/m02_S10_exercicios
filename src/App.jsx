import { Route, Routes } from "react-router";
import "./App.css";
import InstrumentosCard from "./pages/InstrumentosCard/InstrumentosCard";
import InstrumentosTabela from "./pages/InstrumentosTabela/InstrumentosTabela";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={InstrumentosCard} />
        <Route path="/instrumentoTabela" Component={InstrumentosTabela} />
      </Routes>
    </>
  );
}

export default App;
