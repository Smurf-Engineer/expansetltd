// import React, { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
// import './CSS/Contact.css'
// import { ShopContext } from '../Context/ShopContext';

// const Contact = () => {
//   const {theme}=useContext(ShopContext);
//   return (
//     <div className={"container-my_"+theme}>
//       <h1 id="myheading">
//         Contact Us
//       </h1>
//       <ul className="contact-info">
//         <li>
//           <FontAwesomeIcon icon={faPhone} /> +1-210-888-0596
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faEnvelope} /> expansetltd.pnr@outlook.com
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faMapMarkerAlt} /> 481 Hinkler Road, Southampton, SO19 6DN, United Kingdom
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faClock} /> Working Hours: Mon-Fri, 9 AM - 6 PM
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Contact;
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './CSS/Contact.css';
import { ShopContext } from '../Context/ShopContext';

const Contact = () => {
  const { theme } = useContext(ShopContext);

  return (
    <div className={`container-my_${theme} contact-container`}>
      <h1 id="myheading" className="contact-heading">
        Get In Touch With Us
      </h1>
      <p className="contact-description">
        We'd love to hear from you! Whether it's a query, feedback, or complaint, feel free to reach out using the information below.
      </p>
      <ul className="contact-info">
        <li className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" /> 
          <span>+1-210-888-0596</span>
        </li>
        <li className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
          <span>expansetltd.pnr@outlook.com</span>
        </li>
        <li className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> 
          <span>481 Hinkler Road, Southampton, SO19 6DN, United Kingdom</span>
        </li>
        <li className="contact-item">
          <FontAwesomeIcon icon={faClock} className="contact-icon" /> 
          <span>Mon-Fri, 9 AM - 6 PM</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
