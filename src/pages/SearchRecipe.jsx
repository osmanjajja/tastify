import React, { useState, useEffect } from "react";
import Result from "../components/Results";
import NavBar from "../components/NavBar";

const apiKey = process.env.REACT_APP_API_KEY;

const SearchParams = () => {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    requestRecipies();
  }, []);

  async function requestRecipies() {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=20`);
    const json = await res.json();
    setRecipes(json.results);
    console.log(recipes);
  }
  async function searchRecipies() {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=${apiKey}&number=20`);
    const json = await res.json();
    setRecipes(json.results);
    console.log(recipes);
  }

  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchRecipies();
          }}
        >
          <label htmlFor="recipe">
            Search:
            <input id="recipe" placeholder="Search Recipe by Name (Pasta)" value={recipe} onChange={(e) => setRecipe(e.target.value)} />
          </label>
          <button>Submit</button>
        </form>
        <Result recipes={recipes} />
      </div>
    </React.Fragment>
  );
};

export default SearchParams;
