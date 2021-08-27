import './Header.css';
import github from '../assets/logo/github.png';
import mail from '../assets/logo/mail.png';
import linkedin from '../assets/logo/linkedin.png';

function Header() {
  return (
    <div className="Header">
    <h2>PAUL</h2>

    <ul className="contact-float-right">

    <li style ={{backgroundImage:`url(${mail})`}} ></li>
    <li style ={{backgroundImage:`url(${linkedin})`}} ></li>
    <li style ={{backgroundImage:`url(${github})`}} ></li>

    </ul>
    </div>
  );
}

export default Header;
