import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  poster: string;
  title: string;
  fullplot: string;
  year: number;
  genres: Array<string>;
}

export default function Movie(): JSX.Element {
  const [movie, setMovie] = useState<Movie[] | null | undefined>();

  useEffect(() => {
    axios
      .get("http://localhost:4000/getMovie")
      .then((res) => setMovie(res.data));
  }, []);
  console.log("Just a Movie ", movie);

  return <div>Movie</div>;
}
