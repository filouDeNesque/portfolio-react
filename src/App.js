import "./App.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import TitleDivider from "./components/TitleDivider";
import Technologie from "./components/Technologie";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <TitleDivider title="COMPÉTENCES" />
      <Technologie />
      <TitleDivider title="CONTACT" />
      <Contact />
      {/* todo: ajouter le components projets */}
    </div>
  );
}

export default App;
