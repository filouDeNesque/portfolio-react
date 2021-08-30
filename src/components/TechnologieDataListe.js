import  "./TechnologieDataListe.css"

export default function  TechnologieDataListe(props){

  return(

    <div className="TechnologieDataListe">
    <button> {props.categorie}</button>

    {props.items.map(data=>(
      <p className="items-techno">  
      <span className="iconeTechno" 
      style ={{backgroundImage:`url(${data.icone})`}} />
      {data.name}
      </p>
    ))}

    </div>
  )
}	


