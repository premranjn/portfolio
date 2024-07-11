import React from "react";

const WorkItems = ({ item, onClick }) => {
  return (
    <div className="work__card" onClick={onClick}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work_links">
      <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">
      Demo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.github} target="_blank" className="work__button">
          Github
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
      <p className="work_desc">
        <strong>{item.heading}</strong> {item.desc}
      </p>
    </div>
  );
};

export default WorkItems;
