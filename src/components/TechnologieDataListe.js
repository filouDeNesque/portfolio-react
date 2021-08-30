import React   from "react";
import anime from 'animejs/lib/anime.es.js';
import  "./TechnologieDataListe.css";

export class TechnologieDataListe extends React.Component{

  constructor(props){
    super(props);
    this.state= {isopen : false}; 
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){

      anime({
	targets: '.show',
	translateX: 250,
	rotate: '1turn',
	backgroundColor: '#FFF',
	duration: 800
      });
    }

  handleClick(){
    console.log("handle click")
    this.setState({ isopen : !this.state.isopen })
    anime({
	targets: '.show',
	translateX: 250,
	rotate: '1turn',
	backgroundColor: '#FFF',
	duration: 800
      });
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
