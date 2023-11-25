import React, { useEffect, useState } from 'react'
//! ya ayri bir Data componenti olusturulup ordan import edilir ya da direkt burda Data olusturulabilir
import {projectsData} from "./Data"
import { projectsNav } from "./Data";
import WorksItems from './WorksItems';



const Works = () => {
    const[item,setItem]=useState({name:"alle"});
    const[projects, setProjects]=useState([]);
    const [active, setActive]=useState(0);


    useEffect(() => {
      if(item.name === "alle"){
        setProjects(projectsData);
      }
      else{
        const newProjects=projectsData.filter((project)=>{
            return project.category === item.name;
        });
        setProjects(newProjects);
      }
      
    }, [item]);
    
const handleClick=(e,index)=>{
    setItem({name:e.target.textContent});
    setActive(index)
};

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item)=>{
            return <WorksItems item={item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default Works