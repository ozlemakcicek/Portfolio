import React from 'react'
import "./work.css"
import Works from './Works'


const Work = () => {
  return (
    <section className="work section" id="portfolio">
    <div className='portfolio__container'> <div className="sc-ab Ttitle">
        <h3>
          <span className="section__title">#</span>portfolio
          <span className="section__title">------------------</span>
         
        </h3>
      </div>

      {/* <h2 className="section__title">Portfolio</h2>*/}
      <span className="section__subtitle">Most recent works</span> 

      <Works /></div>
     
    </section>
  );
}

export default Work