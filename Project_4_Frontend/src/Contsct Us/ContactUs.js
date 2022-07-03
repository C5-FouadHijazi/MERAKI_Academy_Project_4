import React from "react";
import "./ContactUs.css";

const Contact = () => {
  return (
    <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">Ataa</p>

          <div class="info">
            <div class="information">
              <img class="icon" alt="" /> <p> Turkey -Istanbul / Beylikduzu </p>
            </div>
            <div class="information">
              <img class="icon" alt="" /> <p>Atta@donation.com</p>
            </div>
            <div class="information">
              <img class="icon" alt="" /> <p>053-8896-4247</p>
            </div>
          </div>

          <div>
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form>
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};


export default Contact;
