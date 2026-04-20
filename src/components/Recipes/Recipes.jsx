import "./Recipes.css";
import RecipeCard from "./Recipes_components/RecipeCard/RecipeCard";
import VideoCard from "./Recipes_components/VideoCard/VideoCard";

function Recipes() {
  return (
    <section id="recipes_section" className="recipes_section">
      <div id="section_StepByStep" className="section_in_recipes">
        <h2 id="stepByStep_title" className="recipe_title">
          STEP-BY-STEP
        </h2>
        <RecipeCard
          title="Pistachio CheeseCake"
          description="The Pistachio Cheesecake begins with a simple crust made from crushed cookies mixed with melted butter and pressed into a pan. The filling is prepared by blending cream cheese, sugar, eggs, and a generous amount of pistachio cream, which gives the cheesecake its rich flavor and signature green hue. Once the mixture is poured over the crust, it is baked or chilled depending on the chosen method. After cooling, the cheesecake is topped with chopped pistachios or extra pistachio cream and left to rest in the refrigerator until it reaches the perfect creamy texture for serving."
          image="/img/7f50cc5856808f596654e4b7989b885c0a044a7c.png"
          buttonText="FULL RECIPE"
          onButtonClick={() => console.log("Abrir receta")}
        />
        <RecipeCard
          title="Pistachio CheeseCake"
          description="The Pistachio Cheesecake begins with a simple crust made from crushed cookies mixed with melted butter and pressed into a pan. The filling is prepared by blending cream cheese, sugar, eggs, and a generous amount of pistachio cream, which gives the cheesecake its rich flavor and signature green hue. Once the mixture is poured over the crust, it is baked or chilled depending on the chosen method. After cooling, the cheesecake is topped with chopped pistachios or extra pistachio cream and left to rest in the refrigerator until it reaches the perfect creamy texture for serving."
          image="/img/7f50cc5856808f596654e4b7989b885c0a044a7c.png"
          buttonText="FULL RECIPE"
          onButtonClick={() => console.log("Abrir receta")}
        />
      </div>
      <div id="section_videos" className="section_in_recipes">
        <h2 id="recipeVideo_title" className="recipe_title">
          RECIPE VIDEOS
        </h2>
        <div id="container_videoCards">
          <VideoCard
            title="Creamy Almond"
            image="/img/creamy-almond.png"
            buttonText="FULL VIDEO"
            onButtonClick={() => console.log("Abrir video")}
          />
          <VideoCard
            title="Creamy Almond"
            image="/img/creamy-almond.png"
            buttonText="FULL VIDEO"
            onButtonClick={() => console.log("Abrir video")}
          />
          <VideoCard
            title="Creamy Almond"
            image="/img/creamy-almond.png"
            buttonText="FULL VIDEO"
            onButtonClick={() => console.log("Abrir video")}
          />
          <VideoCard
            title="Creamy Almond"
            image="/img/creamy-almond.png"
            buttonText="FULL VIDEO"
            onButtonClick={() => console.log("Abrir video")}
          />
        </div>
      </div>
    </section>
  );
}

export default Recipes;
