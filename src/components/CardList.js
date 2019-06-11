import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
  return (
    <div className="d-inline-flex flex-wrap justify-content-center">
      {characters.map((each, i) => {
        return (
          <Card
            key={characters[i].url}
            id={characters[i].url}
            name={characters[i].name}
            height={characters[i].height}
            hair_color={characters[i].hair_color}
          />
        );
      })}
    </div>
  );
};

export default CardList;
