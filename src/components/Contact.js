import './Contact.css';

function Contact(){

  return(
    <div className="Contact"> 
    <h2>Au travail... </h2>
    <p>
    Disponible dès maintenant pour rejoindre votre équipe. Je reste entièrement à l'écoute de vos sollicitation.  
    </p>

    <div className="contact-link-share">
    <ul>
    <li>
    <span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/cv.png)'}}
    /> CV </li>
    <li>
    <span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/mail.png)'}}
    />  Mail: <a> p.cuquemy@gmail.com</a></li>

    <li><span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/phone.png)'}}

    /> Téléphone: O7.68.68.84.36 </li>

    </ul>
    </div>
    </div>
  )
}

export default Contact;
