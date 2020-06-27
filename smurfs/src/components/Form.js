import React, { useContext } from 'react';
import { Context } from '../contexts';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    margin: 'auto'
}


const Form = () => {
  
    const { sVals, onChange, onSubmit } = useContext(Context);

    return (
        <form style={formStyle} onSubmit={onSubmit}>
            <input name='name'placeholder='name'value={sVals.name} onChange={onChange} />
            <input name='age' placeholder='age'value={sVals.age} onChange={onChange} />
            <input name='height in cm' placeholder='height' value={sVals.height} onChange={onChange} />
            <button>Add Smurf</button>
        </form>
    );
};

export default Form;
