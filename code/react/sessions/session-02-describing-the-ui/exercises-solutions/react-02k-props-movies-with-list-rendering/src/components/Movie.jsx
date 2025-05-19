export function Movie({
  title,
  director,
  year,
  children,
  image,
  wasWatched,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <img alt="" src={image} width="120" />
      <p>
        Director: <strong>{director}</strong>
      </p>
      <p>
        <small>Year: {year}</small>
      </p>
      <p>{children}</p>
      <p>Watched: {wasWatched ? 'yes' : 'no'}</p>
      {wasWatched && <p>I watched the movie!</p>}
    </div>
  );
}
