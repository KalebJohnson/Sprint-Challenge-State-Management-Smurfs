import React from 'react';

const Card = props => {
  return (
    <div>
      <h3>Name: {props.name} </h3>
      <p>Height: {props.height} </p>
      <p>Age: {props.age} </p>
      <button onClick={e => props.kill(props.id)}> Delete Smurf "oof" </button>
    </div>
  );
};

export default Card;