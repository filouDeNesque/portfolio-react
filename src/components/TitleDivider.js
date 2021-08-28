import './TitleDivider.css';

function TitleDivider(props) {
  return (
    <div className="TitleDivider">
    <h2>{props.title}</h2>
    </div>
  );
}

export default TitleDivider;
