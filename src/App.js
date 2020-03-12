import React from 'react';

import './App.css';
import { getData } from './getrecipes';
import { randomRec } from './random';

function Footer() {

  return <footer>
    Author Erik L <a href="mailto:erla00001@utb.vaxjo.se">Contact me here</a>
  </footer>
}

function Start(props) {

  let [currentData, setCurrentData] = React.useState(undefined);

  async function random() {
    let meals = await randomRec();
    let random_meal = meals[Math.floor(Math.random() * meals.length)]
    const data = await getData(random_meal.name);
    setCurrentData(data);
  }

  async function filter(eve) {
    eve.preventDefault();
    let input = document.getElementById("searchbar").value;
    console.log(input);
    const data = await getData(input);
    setCurrentData(data);
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Recipes</h1>
        <h2>This site lists some recipes</h2>
        <h2 onClick={random}>Problems deciding? Click here</h2>
        <h3>Filter here:</h3>
        <form onSubmit={filter}>
          <input type="text" id="searchbar"></input><br />
          <button onClick={filter}>Click here to filter</button>
        </form>
      </header>

      <main>
        {currentData && currentData.map((recipe, index) =>
          <div className="data" key={index}>
            <h1>{recipe.name}:</h1>
            <img src={recipe.picure} alt="bild of the meal" />
            <table className="dataTable">
              <thead>
                <tr>
                  <th>Amount & Ingredience</th>
                </tr>
              </thead>
              {recipe.commodity.map((commodity, index) =>
                <tbody key={index}>
                  <tr>
                    <td>
                      {commodity}
                    </td>
                  </tr>
                </tbody>)}
            </table>
            <p>Step Guide:</p>
            <p>{recipe.stepGuide}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Start;