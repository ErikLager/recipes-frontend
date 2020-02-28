import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./Login";

let props=0;

function Footer() {
  return <footer>
    Author <a href="mailto:erik.lagergren@hotmail.se" >L</a>
  </footer>
}

function Start() {
  
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
        <div id="recept">
          <h2>Noodles</h2>
          <img onClick={info1} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_196788/cf_5291/terriyakigrillade_kycklingben_med_nudlar.jpg" alt="Pankakes" />
          <p id="info1"></p>
        </div>
        <div id="recept">
          <h2>Pankakes</h2>
          <img onClick={info2} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_33719/cf_5291/pannkakor.jpg" alt="Noodles" />
          <p id="info2"></p>
        </div>
        <div id="recept">
          <h2>Noodles</h2>
          <img onClick={info3} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_196788/cf_5291/terriyakigrillade_kycklingben_med_nudlar.jpg" alt="Pankakes" />
          <p id="info3"></p>
        </div>
        <div id="recept">
          <h2>Pankakes</h2>
          <img onClick={info4} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_33719/cf_5291/pannkakor.jpg" alt="Noodles" />
          <p id="info4"></p>
        </div>
        <div id="recept">
          <h2>Noodles</h2>
          <img onClick={info5} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_196788/cf_5291/terriyakigrillade_kycklingben_med_nudlar.jpg" alt="Pankakes" />
          <p id="info5"></p>
        </div>
        <div id="recept">
          <h2>Pankakes</h2>
          <img onClick={info6} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_33719/cf_5291/pannkakor.jpg" alt="Noodles" />
          <p id="info6"></p>
        </div>
        <div id="recept">
          <h2>Noodles</h2>
          <img onClick={info7} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_196788/cf_5291/terriyakigrillade_kycklingben_med_nudlar.jpg" alt="Pankakes" />
          <p id="info7"></p>
        </div>
        <div id="recept">
          <h2>Pankakes</h2>
          <img onClick={info8} src="//assets.icanet.se/f_auto,q_auto/imagevaultfiles/id_33719/cf_5291/pannkakor.jpg" alt="Noodles" />
          <p id="info8"></p>
        </div>
      </header>
      <Footer />
    </div>
  )
}

function login(){
  props.navigate(1);
}

function filter() {
  let input = document.getElementById("searchbar");
  console.log(input);
}

function info1() {
  let str = document.getElementById("info1").innerHTML;
  let res = str.replace("", "Boil the noodles. Steak the chicken. Throw the chicken in to the noodles");
  document.getElementById("info1").innerHTML = res;
}
function info2() {
  let str = document.getElementById("info2").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info2").innerHTML = res;
}
function info3() {
  let str = document.getElementById("info3").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info3").innerHTML = res;
}
function info4() {
  let str = document.getElementById("info4").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info4").innerHTML = res;
}
function info5() {
  let str = document.getElementById("info5").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info5").innerHTML = res;
}
function info6() {
  let str = document.getElementById("info6").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info6").innerHTML = res;
}
function info7() {
  let str = document.getElementById("info7").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info7").innerHTML = res;
}
function info8() {
  let str = document.getElementById("info8").innerHTML;
  let res = str.replace("", "Mix the flour and salt in a bowl. Mix in 1/2 of the milk & egg.");
  document.getElementById("info8").innerHTML = res;
}

// const url = 'http://localhost:8080/FinalProject/api';


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

export default Start;
