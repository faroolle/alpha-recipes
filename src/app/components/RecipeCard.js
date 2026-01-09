import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="block">
      <div className="bg-cardBg rounded-card shadow-lg shadow-transparent  overflow-hidden h-full">
        <div className="flex flex-col">
          {/* Image column */}
          <div className="md:w-full p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover rounded-card"
            />
          </div>

          {/* Content column */}
          <div className="md:w-[70%] p-4 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-darkCustom mb-2">
              {recipe.title}
            </h3>

            <p className="text-darkCustom opacity-80 mb-3">
              {recipe.shortDescription}
            </p>

            <ul className="flex gap-1 text-xs text-whiteCustom font-medium">
              {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                <li key={index} className="bg-primary px-3 py-1 rounded-btn">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
