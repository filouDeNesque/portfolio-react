import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import TitleDivider from './components/TitleDivider';
import Technologie from './components/Technologie';
import EcoleInfos from './components/EcoleInfos';
import Contact from './components/Contact';

function App() {
  return (

    <div className="App">
    <Header />
    <Presentation />
    <TitleDivider title="FORMATION" />
    <Technologie />
    <TitleDivider title="ECOLE" />
    <EcoleInfos />
    <TitleDivider title="CONTACT" />
    <Contact />

    {/* 
    TODO: section 4 projets
    TODO: contact */}

    </div>
  );
}

export default App;
