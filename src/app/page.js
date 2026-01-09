import Hero from "./components/Hero";
import RecipesSection from "./components/RecipesSection";

export default function Home() {
  return (
    <>
      <Hero
        title="Cook Smart. Eat Better."
        description="Discover simple, delicious recipes made for everyday life."
      />

      <RecipesSection />
    </>
  );
}
