import React, {useState} from 'react';
import './App.css';
import Persons from './components/Persons'

function App() {

  const [state , setState] = useState([{name:"brandon",email:"BrandonPampuch@gmail.com"}]) 

  return (
    <div className="App">
      
      {
        state.map((person)=>{
          return <Persons name={person.name} email={person.email}></Persons>
        })
      }
      
    </div>
  );
}

export default App;
