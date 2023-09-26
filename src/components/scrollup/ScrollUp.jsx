import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll",function(){
        const scrollUp = document.querySelector(".scrollup");
        // 560 viewportal dan yuksekse scrollu goster.degilse gizle
        if (this.scrollY >=560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    })
  return (
  <a href="#" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>
  </a>
  )
}

export default ScrollUp