import React, { useState } from "react";
import "./qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-award qualification__icon"></i>
            Zertifikat
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Deutschland-Clarusway
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="mytitle">
                <h3 className="qualification__title">DSH Studentin</h3>
                <span className="qualification__subtitle">
                  Aachen-RWTH Uni.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="mytitle">
                <h3 className="qualification__title">NaturWissenschaften Master </h3>

                <span className="qualification__subtitle">
                  Istanbul-Istanbul Universität
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2007-2009
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Chemie Ingenieurwesen</h3>
                <span className="qualification__subtitle">
                  Istanbul-Istanbul Universität
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2001-2007
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Deutschland - Clarusway, Trainee
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Chemie Lehrerin</h3>
                <span className="qualification__subtitle">
                  Istanbul-Burc College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-paused
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <a
                  className="qualification__link"
                  href="https://c11n.clarusway.com/en/verify/85058452059157?ref=email"
                  target="blank"
                  // rel="noreferrer"
                >
                  <div>
                    <i class="bx bxs-hand-right"></i>
                  </div>

                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React</h3>
                <a
                  className="qualification__link"
                  href="https://c11n.clarusway.com/en/verify/68641543935809?ref=email"
                  target="blank"
                >
                  <div>
                    <i class="bx bxs-hand-right"></i>
                  </div>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">JavaScript</h3>
                <a
                  className="qualification__link"
                  href="https://c11n.clarusway.com/en/verify/64895347210402?ref=email"
                  target="blank"
                >
                  <div>
                    <i class="bx bxs-hand-right"></i>
                  </div>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HTML&CSS</h3>
                <a
                  className="qualification__link"
                  href="https://c11n.clarusway.com/en/verify/09493462743764?ref=email"
                  target="blank"
                >
                  <div>
                    <i class="bx bxs-hand-right"></i>
                  </div>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                </a>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
