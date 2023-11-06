import React from "react";
import Logo from "../images/Logo .svg";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
        <img src={Logo} alt="Logo" />
          <p>
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Importint links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
            <li>
              <a href="/">Order online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address:<br/>123 Towncity, USA</li>
            <li>Phone:<br/>++ 0123 456 789</li>
            <li>Email:<br/>littleLemon@yahoo.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
          <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Inastagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
