import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="contact__container container grid">
        {" "}
        <div className="sc-ab Ttitle">
          <h3>
            <span className="section__title">#</span>kontakt
            <span className="section__title" id="section__title2">
              *****
            </span>
          </h3>
        </div>
        <div className="contact">
          <div className="schrift">
            <h5>
              Ich interessiere mich für Front-End-Positionen, das ist aber immer
              möglich. Melden Sie sich bei mir.
            </h5>
          </div>

          <div className="msg__box">
            <h5>Schreiben Sie mir hier eine Nachricht</h5>

            <div className="mail">
              <a
                href="mailto:ozlemakcicek83@gmail.com?subject=Connection Message"
                target="blank"
              >
                <i class="bx bx-envelope"></i>
                ozlemakcicek83@gmail.com
              </a>
            </div>

            <span className="mail">
              <i class="bx bxs-mobile"></i>
              +49 17684950573
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
