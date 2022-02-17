import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="section__padding">
      <div className="gpt3__blog-footer">
        <div className="gpt3__blog-footer__heading">
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
        </div> 
        <button>Request Early Access</button>

        <div className="gpt3__blog-footer__bottom-container">
          <div className="gpt3__blog-footer__bottom-groupA">
            <img src={logo} alt="gpt3" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className="gpt3__blog-footer__bottom-groupB">
            <div className="gpt3__blog-footer__bottom-groupB-content"> 
              <h3>Links</h3>
              <p>Overons</p> 
              <p>Counters</p> 
              <p>Social Media</p>
              <p>Contact</p>
            </div>

            <div className="gpt3__blog-footer__bottom-groupB-content">
              <h3>Company</h3>
              <p>Terms and Conditions</p>
              <p>Privacy & Policy</p>
              <p>Contact</p>
            </div>

            <div className="gpt3__blog-footer__bottom-groupB-content">
              <h3>Get in Touch</h3>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>info@payme.net</p>
              <p>085-132567</p>
            </div>
          </div> 
        </div>
        <div className="gpt3__blog-footer__bottom-copyright">
          <p>2021 GPT-3. All rights reserved.</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
