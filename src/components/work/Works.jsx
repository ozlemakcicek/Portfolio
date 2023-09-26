import React, { useEffect, useState } from 'react'
//! ya ayri bir Data componenti olusturulup ordan import edilir ya da direkt burda Data olusturulabilir
import {projectsData} from "./Data"
import { projectsNav } from "./Data";
import WorksItems from './WorksItems';


// import Work1 from "../../assets/social-media-networking-online-communication-connect-concept.jpg";
// import Work2 from "../../assets/6248994.jpg";
// import Work3 from "../../assets/movie_time_22.jpg";
// import Work4 from "../../assets/computer-addiction-1172404_1280.jpg";

//! Data olusturmak icin ilk yontem.Fakat Javascript de calismadi
// export const projectsData = [
//   {
//     id: 1,
//     image: Work1,
//     title: "BlogApp",
//     category: "app",
//   },
//   {
//     id: 2,
//     image: Work2,
//     title: "StockApp",
//     category: "app",
//   },
//   {
//     id: 3,
//     image: Work3,
//     title: "MovieApp",
//     category: "app",
//   },
//   {
//     id: 4,
//     image: Work4,
//     title: "Web design",
//     category: "web",
//   },
// ];
//  export const projectsNav = [
//    {
//      name: "all",
//    },
//    {
//      name: "app",
//    },
//    {
//      name: "web",
//    },
   
//  ];

const Works = () => {
    const[item,setItem]=useState({name:"all"});
    const[projects, setProjects]=useState([]);
    const [active, setActive]=useState(0);


    useEffect(() => {
      if(item.name === "all"){
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
};

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span  onClick={(e)=>{
                handleClick(e, index);
            }} 
            className="work__item" key={index}>
            
              {item.name}{" "}
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