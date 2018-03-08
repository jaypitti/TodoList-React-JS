import React from 'react';

const Card = ({ id, handleClick, flipped, question, answer }) => (
 flipped ? <li onClick={() => handleClick(id)}>
  Answer: {answer}</li>
  :
  <li onClick={() => handleClick(id)}
  >Question: {question}
  </li>

)


export default Card
