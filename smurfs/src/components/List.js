  
import React, { useContext } from 'react';
import { Context } from '../contexts';
import Card from './Card';
import { nanoid } from 'nanoid'

const List = () => {
   
    const { smurfs, sVals, killSmurf } = useContext(Context)
  
    return (<>
        <h3>Current smurfs!</h3>
        { smurfs.map(smurf => <Card key={nanoid()} kill={killSmurf} {...smurf} />) }
    </>);

};

export default List;