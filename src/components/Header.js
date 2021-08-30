import './Header.css';
import github from '../assets/logo/github.png';
import mail from '../assets/logo/mail.png';
import linkedin from '../assets/logo/linkedin.png';

function Header() {
  return (
    <div className="Header">
    <h2>PAUL</h2>

    <ul className="contact-float-right">

    <li className="li-contact" 
    style ={{backgroundImage:`url(${mail})`}} ></li>
    <li className="li-contact" 
    style ={{backgroundImage:`url(${linkedin})`}} ></li>
    <li className="li-contact" 
    style ={{backgroundImage:`url(${github})`}} ></li>

    </ul>
    </div>
  );
}

export default Header;
