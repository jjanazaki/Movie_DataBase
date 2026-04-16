import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Movie.css";

export default function Movie() {
  const [dataApi, setDataApi] = useState([]);

  async function getData() {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=bc86878e54623eb33de9da3ead172a38"
    );
    setDataApi(data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="movies-page">
      <div className="container">
        <h2 className="title">🔥 Trending Movies</h2>

        <div className="row g-4">
          {dataApi.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              
              <div className="movie-card">
                
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.original_title}
                />

                <div className="overlay">
                  <h5>{item.original_title}</h5>
                  <p>⭐ {item.vote_average}</p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}