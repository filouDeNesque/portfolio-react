import React from 'react'
import TechnologieData from './TechnologieData.json';
import TechnologieText from './TechnologieText.json';



export class Technologie extends  React.Component {




  render(){
    return <>
      <h1>Component Technologie </h1>
      <p>{TechnologieText[0].chapnumber}</p>
      <p>{TechnologieData.map(data=>(
	<p>{data.categorie}</p>))}</p>

      </>;
  }

}

export default 	Technologie;
