import React, { useState, useEffect } from "react";
import Result from "../components/Results";
import NavBar from "../components/NavBar";
const apiKey = process.env.REACT_APP_API_KEY;

const SearchParams = () => {
  const [ingredients, setIngredients] = useState("onion");
  const [recipesbying, setRecipesbying] = useState("");

  useEffect(() => {
    searchByIng();
  }, []);

  async function searchByIng() {
    const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`);
    const json = await res.json();
    setRecipesbying(json);
    console.log(recipesbying);
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
            searchByIng();
          }}
        >
          <label htmlFor="ingredients">
            Search:
            <input id="ingredients" placeholder="Search Recipe by ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </label>
          <button>Submit</button>
        </form>
        <Result recipes={recipesbying} />
      </div>
    </React.Fragment>
  );
};

export default SearchParams;
