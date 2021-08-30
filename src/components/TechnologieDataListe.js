import React   from "react";
import anime from 'animejs/lib/anime.es.js';
import  "./TechnologieDataListe.css";

export class TechnologieDataListe extends React.Component{
  myref = React.createRef();
  container = React.createRef();

  constructor(props){
    super(props);
    this.state= {isopen : false}; 
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
  }

  componentDidUpdate(){
    var arrayhtmlellement = []
    arrayhtmlellement = this.container.current.children

    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
	targets:arrayhtmlellement,
	translateX: [20,0],
	backgroundColor: '#FFF',
	duration: 800,
	loop:true,
	scale: [
	  {value: .1, easing: 'easeOutSine', duration: 500},
	  {value: 1, easing: 'easeInOutQuad', duration: 1200}
	],
	delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
      });
  }

  handleClick(){
    console.log(this.container.current.children)
    this.setState({ isopen : !this.state.isopen })
  }

  render(){ 
    return(
      <div className="TechnologieDataListe" >
      <button
      className="btn-techno-liste"
      onClick={this.handleClick}>
      {this.props.categorie}
      </button>
      <div ref={this.container}>
      { this.props.items.map(data=>(
	<p 
	className={this.state.isopen ? "items-techno show": "items-techno"} 
	id={data.name}
	ref={this.myref}
	>  
	<span className="iconeTechno" 
	style ={{backgroundImage:`url(${data.icone})`}} />
	{data.name}
	</p>
      ))
      }
      </div>
      </div>
    )
  }
}	

export default TechnologieDataListe;
