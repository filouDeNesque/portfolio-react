import './Header.css';
import github from '../assets/logo/github.png';
import mail from '../assets/logo/mail.png';
import linkedin from '../assets/logo/linkedin.png';

function Header() {
  return (
    <div className="Header">
    <h2>PAUL</h2>

    <ul className="contact-float-right">
    <a href="mailto: p.cuquemy@gmail.com">
    <li className="li-contact" 
    style ={{backgroundImage:`url(${mail})`}} ></li>
    </a>

    <a href="https://www.linkedin.com/in/paul-cuquemy-559188172/">
    <li className="li-contact" 
    style ={{backgroundImage:`url(${linkedin})`}} ></li>
    </a>

    <a href="https://github.com/filouDeNesque">
    <li className="li-contact" 
    style ={{backgroundImage:`url(${github})`}} ></li>
    </a>
    </ul>
    </div>
  );
}

export default Header;
