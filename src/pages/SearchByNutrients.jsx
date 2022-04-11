import React, { useState, useEffect } from "react";
import Result from "../components/Results";
import NavBar from "../components/NavBar";

const apiKey = process.env.REACT_APP_API_KEY;

const SearchParams = () => {
  const [minCarb, setMinCarb] = useState(5);
  const [maxCarb, setMaxCarb] = useState(200);
  const [maxCalories, setMaxCalories] = useState(500);
  const [minCalories, setMinCalories] = useState(10);
  const [maxProtein, setMaxProtein] = useState(150);
  const [minProtein, setMinProtein] = useState(30);
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    searchByNutrients();
  }, []);

  async function searchByNutrients() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${minCarb}&maxCarbs=${maxCarb}&minProtein=${minProtein}&maxProtein=${maxProtein}&minCalories=${minCalories}&maxCalories=${maxCalories}&number=2&apiKey=${apiKey}`
    );
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
            searchByNutrients();
          }}
        >
          <label htmlFor="mincarb">
            Min-Carbohydrate:
            <input
              id="mincarb"
              placeholder="Enter Minimum daily Carbohydrate Required"
              value={minCarb}
              onChange={(e) => setMinCarb(e.target.value)}
            />
          </label>
          <label htmlFor="maxcarb">
            Max-Carbohydrate:
            <input
              id="maxcarb"
              placeholder="Enter Maximum daily Carbohydrate Required"
              value={maxCarb}
              onChange={(e) => setMaxCarb(e.target.value)}
            />
          </label>

          <label htmlFor="mincal">
            Min-Calories:
            <input
              id="mincal"
              placeholder="Enter Minimum daily Calories Required"
              value={minCalories}
              onChange={(e) => setMinCalories(e.target.value)}
            />
          </label>
          <label htmlFor="maxcal">
            Max-Calories:
            <input
              id="maxcal"
              placeholder="Enter Maximum daily Calories Required"
              value={maxCalories}
              onChange={(e) => setMaxCalories(e.target.value)}
            />
          </label>

          <label htmlFor="minpro">
            Min-Calories:
            <input
              id="minpro"
              placeholder="Enter Minimum daily Protein Required"
              value={minProtein}
              onChange={(e) => setMinProtein(e.target.value)}
            />
          </label>
          <label htmlFor="maxcal">
            Max-Calories:
            <input
              id="maxcal"
              placeholder="Enter Maximum daily Protein Required"
              value={maxProtein}
              onChange={(e) => setMaxProtein(e.target.value)}
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
