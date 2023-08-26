import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ozlemakcicek/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/ozlemakcicek"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://www.xing.com/profile/ozlem_akcicek/cv"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="fa-brands fa-xing"></i> */}
        <box-icon type="logo" name="xing"></box-icon>
      </a>
    </div>
  );
}

export default Social