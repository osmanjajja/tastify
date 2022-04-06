import Recipe from "./Recipe";
const Result = ({ recipes }) => {
  return (
    <div className="search">
      {!recipes.length ? (
        <h1>No Recipe Found</h1>
      ) : (
        recipes.map((recipe) => <Recipe id={recipe.id} name={recipe.title} image={recipe.image} key={recipe.id} />)
      )}
    </div>
  );
};
export default Result;
