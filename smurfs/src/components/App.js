import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Context } from '../contexts'
import List from './List'
import Form from './Form'
import './App.css'

const App = () =>{

  //initial state 
  const [smurfs, setSmurfs] = useState([]);
  const [sVals, setSVals] = useState({ name: '', age: '', height: '' })

  // axios get the single smurf to display
  const getSmurf = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }
    // axios delete promise for removing from api
  const killSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }

  //handle stuffffff
  const onChange = e => setSVals({...sVals, [e.target.name]: e.target.value,});
  const onSubmit = e => {
    axios
      .post('http://localhost:3333/smurfs', sVals)
      .then(res => getSmurf())
      .catch(err => console.log(err))
  }

  //run on mount
  useEffect(() => getSmurf(), [] );

  return (
    <div className='App'>
      <h3>Add a new smurf!</h3>
      <Context.Provider value={{ smurfs, sVals, onChange, onSubmit, killSmurf }}>
        <Form />
        <List />
      </Context.Provider>
    </div>
  )
}

export default App