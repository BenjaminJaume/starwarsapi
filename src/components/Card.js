import React from 'react';
import './Card.css';

const Card = ({ name, height }) => {
  return (
    <div className="card bg-white d-inline-flex flex-wrap m-2 zoom">
      <div className="card-body text-center">
        <div>Name: {name}</div>
        <div>Height: {height}</div>
      </div>
    </div>
  );
};

export default Card;
