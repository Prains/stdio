const CasesSlide = ({
  name,
  value,
  currentSlide,
}: {
  name: string;
  value: string;
  currentSlide: string;
}) => {
  return (
    <p
      className={`text-main min-w-max ${
        currentSlide === value ? "text-[#CF1585]" : ""
      }`}
    >
      {name}
    </p>
  );
};

export default CasesSlide;
