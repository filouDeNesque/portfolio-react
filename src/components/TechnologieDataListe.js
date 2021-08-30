import React   from "react";
import anime from 'animejs/lib/anime.es.js';
import  "./TechnologieDataListe.css";

export class TechnologieDataListe extends React.Component{
  myref = React.createRef();

  constructor(props){
    super(props);
    this.state= {isopen : false}; 
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount(){
  }

  componentDidUpdate(){
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
	targets:".show" ,
	translateX: 20,
	rotate: '1turn',
	backgroundColor: '#FFF',
	duration: 800,
	delay:100
      })
      .add({
	targets: ".items-techno",
	translateX: 0,
	backgroundColor: '#FFF',
	duration: 800
      })
    ;
  }

  handleClick(){
    console.log("handle click isopen value : "+this.state.isopen)
    this.setState({ isopen : !this.state.isopen })
  }

  render(){ 
    return(
      <div className="TechnologieDataListe">
      <button
      className="btn-techno-liste"
      onClick={this.handleClick}>
      {this.props.categorie}
      </button>
      { this.props.items.map(data=>(
	<p 
	className={this.state.isopen ? "items-techno show": "items-techno"} 
	ref={this.myref}
	>  
	<span className="iconeTechno" 
	style ={{backgroundImage:`url(${data.icone})`}} />
	{data.name}
	</p>
      ))
      }
      </div>
    )
  }
}	

export default TechnologieDataListe;
