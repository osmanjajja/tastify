import { Link } from "react-router-dom";

const Recipe = (props) => {
  const { name, image, id } = props;

  const hero = image;

  return (
    <Link to={`/details/${id}`} className="recipe">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default Recipe;
