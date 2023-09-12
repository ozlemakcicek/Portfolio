import React, { useState } from "react";
import "./qualification.css";

export default function Qualification() {

  const[toggleState, setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index)
  }
  
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
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
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
              <div>
                <h3 className="qualification__title">Chemie Lehrerin</h3>
                <span className="qualification__subtitle">
                  Istanbul-Burc College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-paused
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
                <h3 className="qualification__title">Master </h3>

                <span className="qualification__subtitle">
                  Istanbul-Istanbul Universität
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2007-2009
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Chemie Ingenieurwesen</h3>
                <span className="qualification__subtitle">
                  Istanbul-Istanbul Universität
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2001-2007
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
