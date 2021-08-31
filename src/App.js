import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import TitleDivider from './components/TitleDivider';
import Technologie from './components/Technologie';
import EcoleInfos from './components/EcoleInfos';

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

    {/* 
    TODO:section 1 presentation
    TODO: section 2 more about me
    TODO; section 3 techno utilisé
    TODO: section 4 projets
    TODO: contact */}

    </div>
  );
}

export default App;
