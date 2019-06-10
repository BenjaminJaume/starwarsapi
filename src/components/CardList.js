import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  return <Card name={people[0].name} height={people[0].height} />;
};

export default CardList;
