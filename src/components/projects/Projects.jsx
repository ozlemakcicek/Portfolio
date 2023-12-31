import React, { useState } from 'react'
import "./projects.css"







export default function Projects() {
 


  return (
    <section className='projects section'>
    <div className="projects__container container grid">
      <section className="global" id="projects">
        <div className="sc-ab Ttitle">
          <h3>
            <span className="section__title">#</span>projekte
            <span className="section__title" id='section__title2'>*****</span>
          </h3>
        </div>
        <div className="ort">
          <div className="alan">
            <div className="alan1">
              <div className="stock__app"></div>
              <div className="baslik">
                <h5>Stock App</h5>
              </div>
              <div className="punkt">
                <h5>HTML</h5>
                <h5>React</h5>
                <h5>Redux</h5>
                <h5>MUI</h5>

                <div className="butt">
                  <button>
                    <a
                      href="https://github.com/ozlemakcicek/StockApp"
                      target="blank"
                    >
                      GitHub
                    </a>
                  </button>
                 
                  
                   

                
                </div>
              </div>
            </div>
          </div>

          <div className="alan">
            <div className="alan1">
              <div className="blog__app"></div>
              <div className="baslik">
                <h5>Blog App</h5>
              </div>
              <div className="punkt">
                <h5>HTML</h5>
                <h5>React</h5>
                <h5>Redux</h5>
                <h5>MUI</h5>
                {/* <p>Blog App </p> */}
                <div className="butt">
                  <button>
                    <a
                      href="https://github.com/ozlemakcicek/myBlogApp"
                      target="blank"
                    >
                      GitHub
                    </a>
                  </button>

                  {/* <button> More... </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="alan">
            <div className="alan1">
              <div className="movie__app"></div>
              <div className="baslik">
                <h5>Movie App</h5>
              </div>
              <div className="punkt">
                <h5>HTML</h5>
                <h5>React</h5>
                <h5>Redux</h5>
                <h5>Firebase</h5>
                {/* <p>Movie App </p> */}
                <div className="butt">
                  <button>
                    <a
                      href="https://github.com/ozlemakcicek/MovieApp"
                      target="blank"
                    >
                      GitHub
                    </a>
                  </button>

                  {/* <button> More... </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></section>
    
  );
}
