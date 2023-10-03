import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
    <div className="skills__container"> 
    <div className="sc-ab Ttitle">
        <h3>
          <span className="section__title">#</span>skills
          <span className="section__title">------------------</span>
        </h3>
      </div>

      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <div className="tablo">
          <div className="tbl">
            <div className=" title__box">
              <h5>Languages</h5>
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
              </ul>
            </div>
          </div>
        </div>

        <div className="tablo">
          <div className="tbl">
            <div className=" title__box">
              <h5>Others</h5>
            </div>

            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Mui</li>
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
                <li>React</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
        </div>
      </div></div>
     
    </section>
  );
}
