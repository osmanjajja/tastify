import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const apiKey = process.env.REACT_APP_API_KEY;
const Details = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    requestRecipies();
  }, []);

  async function requestRecipies() {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const json = await res.json();
    console.log(json);
    setRecipe(json);
  }

  return (
    <div className="details">
      <div>
        <h1>{recipe.title}</h1>
        <h2>
          <img src={recipe.image} alt={`Recipe pic`} />
        </h2>
        <h2>{`Ready In Minutes:${recipe.readyInMinutes}`}</h2>
        <h2>{`Servings:${recipe.servings}`}</h2>
        <h2>{`healthScore:${recipe.healthScore}`}</h2>
        <h2>{`Recipe Id: ${recipe.id}`}</h2>
        <p>{recipe.summary}</p>
      </div>
    </div>
  );
};
export default Details;
