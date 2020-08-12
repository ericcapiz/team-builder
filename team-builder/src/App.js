import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Team from './Team'

function App() {
  const [teams, setTeam] = useState([]);
  const addTeam = team =>{
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    }
    setTeam([...teams, newTeam])
  }


  return (
    <div className="App">
      <Form addTeam={addTeam} />
      <h1>My Team:</h1>
      <Team teams={teams}/>
    </div>
  );
}

export default App;
