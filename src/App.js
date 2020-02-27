import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="username">Username:</p>
        <input type="text" id="uname"></input><br />
        <p id="password">Password:</p>
        <input type="password" id="pword" /><br />
        <button type="submit" onClick={Submit}>Submit</button>
      </header>
    </div>
  )
}

const url = 'http://localhost:8080/FinalProject/api';

function Submit(){
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  let encoded = `${btoa(`${uname}:${pword}`)}`;

  try {
    fetch(url, {
      method: 'POST',
      headers:{
        Authorization: `${btoa(`${uname}:${pword}`)}`
      }
    });
    console.log(test);
    
  } catch (error) {console.log(error);
    
  }
}

export default App;
