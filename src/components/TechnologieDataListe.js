import  "./TechnologieDataListe.css"

export default function  TechnologieDataListe(props){

  return(

    <div className="TechnologieDataListe">
    <button> {props.categorie}</button>

    {props.items.map(data=>(
      <p> {data.name}</p>
    ))}
    
    </div>
  )
}	


