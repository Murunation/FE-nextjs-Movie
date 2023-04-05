import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Movie {
  poster: string;
  title: string;
  fullplot: string;
  year: number;
  genres: Array<string>;
}

export default function Cards(): JSX.Element {
  const [movies, setMovies] = useState<Movie[] | null | undefined>();

  useEffect(() => {
    axios
      .get("http://localhost:4000/getMovies")
      .then((res) => setMovies(res.data));
  }, []);
  console.log("movies", movies);

  return (
    <div>
      <div>Movies</div>
      <div className="w-full flex flex-wrap justify-center ">
        {movies &&
          movies.map((movies: Movie, index: number) => (
            <Card _id={""} {...movies} key={index} />
          ))}

        {/* <Card data={movies} key={} /> */}
      </div>
    </div>
  );
}
