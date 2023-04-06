import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MovieType } from "@/util/type";
import { log } from "console";

export default function Movie() {
  const [data, setData] = useState<MovieType | null>(null);
  const { query } = useRouter();
  console.log("Router ", query);

  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:4000/movies/${query.id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [query.id]);

  console.log(data);
  

  return <div>
    ID: {query.id}

    <div>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <picture>
            <img src={data.poster} alt="movie picture" />
          </picture>
          <p>{data.fullplot}</p>
        </div>
      )}
    </div>

  </div>;
}
