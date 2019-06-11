import React from 'react';
import './Card.css';

const Card = ({ id, name, height, hair_color }) => {
  return (
    <div className="card m-1 zoom ">
      <div className="card-body">
        <img
          className="mb-2"
          src={`https://robohash.org/${id}?size=200x200`}
          alt={'Picture of ' + name}
        />
        <div>Name: {name}</div>
        <div>Height: {height}</div>
        <div>Hair color: {hair_color}</div>
      </div>
    </div>
  );
};

export default Card;
