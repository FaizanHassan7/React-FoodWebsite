import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="outer-service">
        {service.map((elem) => {
          return (
            <div className="inner-service">
              <div className="service-card">
                <h1>{elem.icon}</h1>
                <h2>{elem.title}</h2>
                <p>
                  {
                    elem.description
                  }
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
