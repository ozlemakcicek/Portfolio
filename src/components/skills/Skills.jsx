import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container">
        <div className="sc-ab Ttitle">
          <h3>
            <span className="section__title">#</span>fähigkeiten
            <span className="section__title" id="section__title2">
              *****
            </span>
          </h3>
        </div>

        <span className="section__subtitle">Mein technisches Niveau</span>

        <div className="skills__container container grid">
          <div className="tablo">
            <div className="tbl">
              <div className=" title__box">
                <h5>Sprache</h5>
              </div>

              <div>
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tablo">
            <div className="tbl">
              <div className=" title__box">
                <h5>Tools</h5>
              </div>

              <div>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Postman</li>
                  <li>GitHub</li>
                  <li>Netlify</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tablo">
            <div className="tbl">
              <div className=" title__box">
                <h5>Andere</h5>
              </div>

              <div>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>GIT</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tablo">
            <div className="tbl">
              <div className="  title__box">
                <h5>FrameWork</h5>
              </div>

              <div>
                <ul>
                  <li>React.js</li>
                  <li>Django</li>
                  <li>Bootstrap</li>
                  <li>Mui</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
