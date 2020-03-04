import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import { getData } from './getrecipes';

let props=0;

function Footer() {
  return <footer>
    Author <a href="mailto:erik.lagergren@hotmail.se" >L</a>
  </footer>
}

function Start() {
  
  async function filter() {
    let input = document.getElementById("searchbar").value;
    console.log(input);
    const data = await getData(input);
    console.log(data);
  }
  

  let currentContent;
  const [currentPage, setCurrentPage] = React.useState(0);
  if (currentPage === 0) {
    currentContent = <Start />
  }
  else if (currentPage === 1) {
    currentContent = <Login />
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <button id="Log in" onClick={login}>Log in</button> */}
        <h1>E-Recipes</h1>
        <h2>This site lists some recipes</h2>
        <h3>Filter here:</h3><input type="text" id="searchbar"></input><br />
        <button onClick={filter}>Click here to filter</button>
      </header>
      
      <Footer />
    </div>
  )
}

function login(){
  props.navigate(1);
}


export default Start;
