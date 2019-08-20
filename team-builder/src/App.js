import React, {useState} from 'react';
import './App.css';
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'

function App() {

  const [state , setState] = useState([{name:"brandon",email:"BrandonPampuch@gmail.com"}]);

  const addPerson = (newPerson) => {
    setState([...state, newPerson] )
  }

  return (
    <div className="App">
      <PersonsForm addPerson = {addPerson}></PersonsForm>
      {
        state.map((person)=>{
          return <Persons name={person.name} email={person.email}></Persons>

        })
      }
      
    </div>
  );
}

export default App;
