export default function Hero({
  title,
  description,
  backgroundImage = "/home-hero.jpg",
}) {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-darkCustom opacity-70 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-4">
        <h1 className="text-whiteCustom text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-whiteCustom text-lg md:text-xl font-regular">
          {description}
        </p>
      </div>
    </section>
  );
}
