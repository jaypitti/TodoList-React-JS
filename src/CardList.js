import React from 'react';
import Card from './Card';


const CardList = ({id, cards, handleClick }) => (
  <ul>
  { cards.map( card =>
    <Card
    key={card.id}
    handleClick={handleClick}
    {...card}
    />
  )}
  </ul>
)

export default CardList;
