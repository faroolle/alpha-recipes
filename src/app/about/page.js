import Hero from "../components/Hero";
import TitleDesc from "../components/TitleDesc";

export default function About() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="About ALPHA recipes"
        description="Learn more about our mission to make cooking simple, fun, and delicious."
        backgroundImage="/about-hero.jpg"
      />

      {/* About content section */}
      <section className="py-16">
        <TitleDesc
          title="Our Story"
          description="ALPHA recipes was created to help home cooks discover simple, delicious, and healthy meals. We believe cooking should be enjoyable and accessible for everyone."
        />
      </section>
    </>
  );
}
