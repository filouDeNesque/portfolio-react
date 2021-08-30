import React from 'react'
import TechnologieData from './TechnologieData.json';
import TechnologieTextJson from './TechnologieText.json';
import TechnologieDataListe from './TechnologieDataListe';
import TechnologieText from './TechnologieText';
import './Technologie.css'

export class Technologie extends  React.Component {

  render(){
    return <div className="Technologie">

      {TechnologieTextJson.map(data=>(

   <TechnologieText 
	chapnumber = {data.chapnumber}
	name={data.name}
	items= {data.items}
	/>	

      ))}

      {TechnologieData.map(data=>(

	<TechnologieDataListe 
	categorie={data.categorie} 
	items={data.items}/>

      ))}

      </div>;
  }

}

export default 	Technologie;
