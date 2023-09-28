import React from 'react'
import "./blogs.css"

const Blogs = () => {
  return (
    <section className="global" id="blogs">
      <div className="sc-ab Ttitle">
        <h3>
          <span className="section__title">#</span>blogs
          <span className="section__title">------------------</span>
        </h3>
      </div>

      <section className="sec2">
        <div className="kiste1">
          <h4>
            <a
              href="https://medium.com/@ozlemakcicek83/clean-code-187e8acface9"
              target="_blank"
            >
              Best practices for writing Clean Code
            </a>
          </h4>
        </div>
        <div className="kiste2">
          <h4>
            <a
              href="https://medium.com/@ozlemakcicek83/foreach-in-javascript-a77f83bc1899"
              target="_blank"
            >
              Interwiev: ForEach loop in JavaScript?
            </a>
          </h4>
        </div>

        <div className="kiste3">
          <h4>
            <a
              href="https://medium.com/@ozlemakcicek83/javascript-is-a-powerful-language-that-is-one-of-the-primary-building-blocks-of-the-web-476b6b9e783f"
              target="_blank"
            >
             JavaScript is a Powerfull Language 
            </a>
          </h4>
        </div>

        <div className="kiste4">
          <h4>
            <a
              href="https://medium.com/@ozlemakcicek83/12-website-for-developer-6e847ca59c53"
              target="_blank"
            >
              12 wonderfull Website for Developer
            </a>
          </h4>
        </div>
      </section>
    </section>
  );
}

export default Blogs