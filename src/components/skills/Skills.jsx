import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section">
      <div className='cizgi'>
        <h3>
          <span className="Sspan">#</span>skills
          <span className="Sspan"> ----------------</span>
        </h3>
      </div>
      <div className='statue'></div>
      <div className='tablo'>
      <div className='langtbl'>
        <div className='dil'>
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
    </section>
  );
}
