import React from "react";
import "../Components.css";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div className="social-media">
          <h3>Social Media</h3>
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="facebook" className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="instagram" className="icon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} alt="youtube" className="icon" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="youtube" className="icon" />
            </a>
          </div>
        </div>
        <div className="timing">
          <h3>Timing</h3>
          <div>
            <p>Monday – Sunday : 11:00 AM – 04:00 PM</p>
            <p>Monday – Sunday : 06:00 PM – 11:00 PM</p>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <div>
            <p>+91 91250 33797</p>
            <p>Basaratpur, Gorakhpur, Uttar Pradesh</p>
            <p>Martini@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p>2024 © Copyright Martini Restaurant.</p>
        <p>Design & Developed By Gaurav Singh.</p>
      </div>
    </footer>
  );
}

export default Footer;
