import './EcoleInfos.css';

function EcoleInfos(){

  return (
    <div className="EcoleInfos">
    <div className="ecole-container-left">
    <h2>Organisme formateur EQL </h2>
    <p> L 'Afcepf (EQL) est un organisme français de formation professionnelle et un établissement d’enseignement supérieur délivrant des diplômes d’État inscrits au RNCP. Spécialisée dans le domaine informatique études et développement et la reconversion professionnelle, elle dispense trois formations de niveau Bac+4 à Bac+5. AFCEPF et EQL (Ecole de la Qualité Logicielle) forment ensemble un établissement de formation professionnelle</p>
    </div> 
    <div className="ecole-container-column-right">
    <h3>Histoire: </h3>
    <p>L'Afcepf (Association française de conseil et d'éducation professionnelle) a été créée en 1984 avec l'appui de l'École Polytechnique Féminine. À l’origine, l’appellation de l’organisme était l’Association de Formation Continue de l’École Polytechnique Féminine. </p>
    <h4>Titre délivré </h4>
    <ul>
    <li>Titre « Analyste informaticien » (Reconversion professionnelle)
  Titre inscrit au RNCP (homologué par l’État) de niveau II (Master I - Bac + 4)
  Filière Génie du traitement de l’information (1er cycle) </li>
    <li> Titre « Architecte Logiciel »
  Titre inscrit au RNCP (homologué par l’État) de niveau I (Master 2 - Bac + 5)
  Filière Génie du traitement de l’information (2e cycle)</li>
    </ul>
    <p>En savoir <a href="https://www.ecoleql.fr/">plus</a></p>
    </div>
    </div>
);
}

export default EcoleInfos;
