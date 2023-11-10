import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <>
    <div className="Menu-card">
      {menu.map((elem) => {
        const {  title, price, description, imgsrc } = elem;
        return (
            <>
          <div className="Menu-card">
            <div className="Menu-inner">
              <img  style={{width:'300px', height:'150px',borderRadius:'10px'}}src={imgsrc} alt="error" />
              <h2>{title}</h2>
              <h5>{price}</h5>
              <p>{description}</p>
            </div>
          </div>
        </>
        );
      })}
      </div>
    </>
  );
};

export default MenuCard;
