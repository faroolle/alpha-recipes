import Hero from "../../components/Hero";
import TitleDesc from "../../components/TitleDesc";
import recipes from "../../data/recipes";

export default async function RecipePage({ params }) {
  const { id } = await params;

  // Find recipe by id
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="py-16 text-center text-darkCustom">
        <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
        <p className="opacity-80">
          Sorry, we couldn’t find the recipe you’re looking for.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Hero section */}
      <Hero
        title={recipe.title}
        description={recipe.shortDescription}
        backgroundImage={recipe.image}
      />

      {/* Full description + ingredients */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <TitleDesc
          title="Description"
          description={recipe.fullDescription}
          align="left"
        />

        {/* Ingredients */}
        <div className="mt-8 max-w-4xl mx-auto px-6 md:px-12">
          <h3 className="text-xl font-semibold text-darkCustom mb-4">
            Ingredients
          </h3>
          <ul className="flex flex-wrap gap-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="bg-primary text-whiteCustom font-medium px-3 py-1 rounded-btn"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
