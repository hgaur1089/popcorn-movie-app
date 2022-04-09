import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //https//api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(`${title} `, movies);

  return (
    <Container>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map((movie) => {
          <RowPoster
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />;
        })}
      </RowPosters>
    </Container>
  );
}

const Container = styled.div``;
const RowPosters = styled.div``;
const RowPoster = styled.img`
  object-fit: contain;
  width: 100%;
`;

export default Row;
