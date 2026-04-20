import "./RecipeCard.css";

function RecipeCard({ title, description, image, buttonText, onButtonClick }) {
  return (
    <article className="recipe_card">
      <div className="recipe_card_image_wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="recipe_card_content">
        <h3 className="recipe_card_title">{title}</h3>

        <p className="recipe_card_description">{description}</p>

        <button className="recipe_card_button">{buttonText}</button>
      </div>
    </article>
  );
}

export default RecipeCard;
