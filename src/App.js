import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import TitleDivider from './components/TitleDivider';

function App() {
  return (
    <div className="App">
    <Header />
    <Presentation />
    <TitleDivider title="FORMATION" />

    <TitleDivider title="ECOLE" />
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
