import React, { useState, useEffect } from "react";
import Result from "../components/Results";
import NavBar from "../components/NavBar";
const apiKey = process.env.REACT_APP_API_KEY;

const SearchParams = () => {
  const [id, setId] = useState();
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    searchSimilar();
  }, []);

  async function searchSimilar() {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`);
    const json = await res.json();
    setRecipes(json);
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
            searchSimilar();
          }}
        >
          <label htmlFor="search-id">
            Search:
            <input
              id="search-id"
              typeof="number"
              placeholder="Search Similar(Ex. Enter ID:715594)"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        <Result recipes={recipes} />
      </div>
    </React.Fragment>
  );
};

export default SearchParams;
