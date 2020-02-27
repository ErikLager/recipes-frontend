import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./Login";


// let currentContent;
// const [currentPage, setCurrentPage] = React.useState(null);

// function navigate(id) {
//   setCurrentPage(id);
// }


// if (currentPage === 0) {
//   currentContent = <Start />
// }
// else if (currentPage === 1) {
//   currentContent = <Login />
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Recipes</h1>
        <h2>This site lists some recipes</h2>
        <input type="text" id="searchbar"></input>
        {/* <button type="login">Log in</button> */}
      </header>
    </div>
  )
}


const url = 'http://localhost:8080/FinalProject/api';


// function Submit() {
//   let uname = document.getElementById("uname").value;
//   let pword = document.getElementById("pword").value;
//   let encoded = `${btoa(`${uname}:${pword}`)}`;

//   // try {
//   //   fetch(url, {
//   //     method: 'POST',
//   //     headers:{
//   //       Authorization: `${btoa(`${uname}:${pword}`)}`
//   //     }
//   //   });
//   //   console.log(test);

//   // } catch (error) {console.log(error);

//   // }
// }

export default App;
