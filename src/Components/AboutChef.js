import React from "react";

const AboutChef = ({ about }) => {
  return (
    <div>
      <>
        <div className="contact-form">
          <h1 className="contact-form-head">--------- Team Members---------</h1>
          <h1 className="contact-form-second">Our Master Chefs</h1>
        </div>
        <div className="Menu-card">
          {about.map((elem) => {
            const { title, address, imgsrc } = elem;
            return (
              <>
                <div className="Chef-card">
                  <div className="Chef-inner">
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={imgsrc}
                      alt="error"
                    />
                    <h3>{title}</h3>
                    <h6>{address}</h6>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default AboutChef;
