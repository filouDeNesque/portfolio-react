import {useState} from "react";
import  "./TechnologieDataListe.css";

export default function  TechnologieDataListe(props){

  const [isopen, setIsOpen] = useState(false);

  return(

    <div className="TechnologieDataListe">
    <button
    className="btn-techno-liste"
    onClick={()=>setIsOpen(!isopen)}>
    {props.categorie}
    </button>
    {isopen &&
      props.items.map(data=>(
	<p className="items-techno">  
	<span className="iconeTechno" 
	style ={{backgroundImage:`url(${data.icone})`}} />
	{data.name}
	</p>
      ))

    }
    </div>
  )
}	


