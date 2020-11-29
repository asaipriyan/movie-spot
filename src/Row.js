import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isPosterPath }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // run once  when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          
          <img
            key={movie.id}
            className={`row_poster ${isPosterPath && 'row_posterLarge'}`}
            src={`${baseUrl}${ isPosterPath ? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />        
        ))}
      </div>
    </div>
  );
}

export default Row;
