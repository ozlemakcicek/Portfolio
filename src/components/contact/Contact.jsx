import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="sc-ab Ttitle">
        <h3>
          <span className="section__title">#</span>contact
          <span className="section__title">------------------</span>
        </h3>
      </div>
<div className='contact'>
      <div className="schrift">
        <h5>I am interested in front-end positions, 
        Allthough, you can always reach out to me.</h5>
      </div>

      <div className="msg__box">
        <h5 >Message me here</h5>

        <div className="mail">
          <a href="mailto:ozlemakcicek83@gmail.com?subject=Connection Message" target="blank"> 
            <i class="bx bx-envelope"></i>
            ozlemakcicek83@gmail.com
          </a>
        </div>

        <span className="mail">
          <i class="bx bxs-mobile"></i>
          017684950573
        </span>
      </div>
      </div>
    </section>
  );
}

export default Contact