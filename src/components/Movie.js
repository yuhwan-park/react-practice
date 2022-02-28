import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="Movie" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link> ({year})
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
