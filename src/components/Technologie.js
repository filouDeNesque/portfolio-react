import React from 'react'
import TechnologieData from './TechnologieData.json';
import TechnologieText from './TechnologieText.json';
import TechnologieDataListe from './TechnologieDataListe';


export class Technologie extends  React.Component {




  render(){
    return <div className="Technologie">
      <h1>Component Technologie </h1>
      <p>{TechnologieText[0].chapnumber}</p>

      {TechnologieData.map(data=>(
	<TechnologieDataListe 
	categorie={data.categorie} 
	items={data.items}/>
      ))}

      </div>;
  }

}

export default 	Technologie;
