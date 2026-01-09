export default function TitleDesc({ title, description, align = "center" }) {
  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`max-w-3xl mx-auto mb-12 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-darkCustom mb-4">
        {title}
      </h2>

      <p className="text-base md:text-lg text-darkCustom opacity-80">
        {description}
      </p>
    </div>
  );
}
