import React, { useEffect, useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch('https://nomad-movies.nomadcoders.workers.dev/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => setErrorMsg('에러 발생..'));
  }, []);

  return (
    <div>
      {errorMsg && <p>{errorMsg}</p>}
      <h1>Movie</h1>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            {/* <img src={movie.poster_path} alt={movie.title} width="250" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
