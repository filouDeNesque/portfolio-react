import './TechnologieText.css';

function TechnologieText(props) {
  return (
    <div className="TechnologieText" className={props.name}>
    {props.items.map(data=>(
      <div className="sp-recap">
      <h2>{data.key}</h2>
      <p>{data.content} </p>
      </div>
    ))}
    </div>
  );
}

export default TechnologieText;
