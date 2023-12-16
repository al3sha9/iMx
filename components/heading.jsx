export default function TitleSection({ firstTitle, secondTitle }) {
  return (
    <div className="py-4">
      <h2 className="font-medium text-5xl ">{firstTitle}</h2>
      <h2 className="grad2 text-6xl md:text-7xl font-bold">{secondTitle}</h2>
    </div>
  );
}
