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
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
	targets:this.container.current.children,
	translateX: [600,20],
	loop:true,
	scale: [
	  {value: .1, easing: 'easeOutSine', duration: 500},
	  {value: 1, easing: 'easeInOutQuad', duration: 1200}
	]
      });
  }

  handleClick(){
    console.log(this.container.current.children)
    this.setState({ isopen : !this.state.isopen })
  }

  render(){ 
    return(
      <div className="TechnologieDataListe" >
      <a href="/#"
      className="btn-techno-liste btn btn-dark btn-mid"
      onClick={this.handleClick}>
      {this.props.categorie}
      </a>
      <div ref={this.container} className="container-icone">
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
