import './Contact.css';

function Contact(){

  return(
    <div className="Contact"> 
    <h2>Au travail... </h2>
    <p>
    Disponible dès à présent pour rejoindre votre équipe. Je reste à l'écoute de vos sollicitations.  
    </p>

    <div className="contact-link-share">
    <ul>

    <a href="./CV.pdf" download="CV.pdf">
    <li>
    <span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/cv.png)'}}
    /> CV</li>
    </a> 

    <a href="mailto:p.cuquemy@gmail.com">
    <li>
    <span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/mail.png)'}}
    />  Mail:  p.cuquemy@gmail.com</li>
    </a>


    <a href="tel:+33768688436">
    <li>
    <span 
    className="icone-contact"
    style={{backgroundImage:'url(./IconeContact/phone.png)'}}
    /> Téléphone: O7.68.68.84.36 
    </li>
    </a>

    </ul>
    </div>
    </div>
  )
}

export default Contact;
