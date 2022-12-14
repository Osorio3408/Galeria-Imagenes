import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "20rem" }}>
        <img src={img} className="card-img-top" alt="..." />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
