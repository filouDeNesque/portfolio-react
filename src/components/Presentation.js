import './Presentation.css';
import presentationText from "./Presentation.json"

function Presentation() {
  return (
    <div className="Presentation">
    <h2>{presentationText[0].Paragraphe}</h2>
    <h3>Un peu plus </h3>
    <p>{presentationText[1].Paragraphe}</p>

    </div>
  );
}

export default Presentation;
