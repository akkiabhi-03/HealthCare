import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            HealthCare Online is a modern platform dedicated to transforming healthcare management. Our mission is to make quality medical services accessible, efficient, and patient-focused through innovative technology.
          </p>
          <p>
            We are passionate about healthcare and technology! Our team is working on a comprehensive MERN STACK PROJECT to streamline hospital operations, appointment bookings, doctor-patient communication, and more.
          </p>
          <p>
            At HealthCare Online, we believe in compassionate care for every patient, secure and seamless digital experiences, and empowering hospitals, doctors, and patients with smart solutions.
          </p>
          <p>
            We are committed to continuous improvement and adapting to the latest advancements in healthcare and software development. Join us on our journey to make healthcare better, together!
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
