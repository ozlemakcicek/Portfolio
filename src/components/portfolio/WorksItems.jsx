import React from 'react'

const WorksItems = ({item}) => {


  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} target="_blank" rel="noreferrer"></a>
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title} </h3>
      <div className="links">
        <a
          href={item.link}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          href={item.linkgitH}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          GitHub link
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorksItems