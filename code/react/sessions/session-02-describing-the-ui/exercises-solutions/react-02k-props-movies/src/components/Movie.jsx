export function Movie({ title, director, year, image, watched }) {
  return (
    <div className="Movie">
      <h2>{title}</h2>
      <img src={image} alt={title} width="200" />
      <p>Director: {director}</p>
      <p>Published: {year}</p>
      {watched && <p>I watched this movie.</p>}
    </div>
  );
}
