import "./Presentation.css";
import presentationText from "./Presentation.json";
import PresentationData from "./PresentationData";

function Presentation() {
  return (
    <div className="Presentation">
      <h2>{presentationText[0].Paragraphe}</h2>

      <div className="more-infos-section">
        <h3>{presentationText[1].Title}</h3>
        <div className="column-right">
          <p>{presentationText[1].Paragraphe}</p>
          <p>{presentationText[2].Paragraphe}</p>
        </div>
      </div>

      <PresentationData />
    </div>
  );
}

export default Presentation;
