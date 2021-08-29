export default function  TechnologieDataListe(props){

  return(

    <div>
    <button> {props.categorie}</button>
    {props.items.map(data=>(
      <p> {data.name}</p>
    ))}
    </div>
  )
}	


