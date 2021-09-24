import './App.css';
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import RecipeTile from "./components/recipe-tile";
import Footer from './Footer';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `497cc738`;
  const YOUR_APP_KEY = "c9f7b9fb405e7893f0a66279ab9cfe6e";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  const buttonOver = (e) => {
    e.target.innerHTML = "Go!";
  }
  const buttonOut = (e) => {
    e.target.innerHTML = "Search";
  }

  return (
    <div className="App">
      <h1 onClick={getRecipeInfo} className="text-center"> Food Recipe Search API </h1>
      <p className="lead text-center">This Edamam recipe API has the data of tens of thousands of foods, including international dishes.</p>
      <p><strong>Enter any type of food</strong> <br></br></p>
      <p className="text-center">(e.g.: pasta, Samosa, etc.) to see its magic.<span className="spinner-grow spinner-grow-sm"> </span></p>

      <form onSubmit={onSubmit} className="search-form">
        <input className="search-bar" type="text" placeholder="Enter your favourite dish :)" value={query} onChange={(e) => setquery(e.target.value)} />
        <button className="search-button" type="submit" onMouseOver={buttonOver} onMouseOut={buttonOut}>Search</button>
      </form>
      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile key={uuidv4()} recipe={recipe} />;
          })}
      </div>
      <div>
        <Footer />
      </div>
    </div >

  );
}

export default App;
