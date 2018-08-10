import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15053.641270995937!2d-99.1739988!3d19.3946696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32271a8363b4789f!2sPepsi+Center+WTC!5e0!3m2!1ses!2smx!4v1533872675902"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
