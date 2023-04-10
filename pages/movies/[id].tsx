import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MovieType } from "@/util/type";

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

  return (
    <div className="bg-slate-200 min-h-full">
      <div className="w-[75%] m-auto pt-5">
        ID: {query.id}
        <div>
          {data && (
            <div>
              <h1 className="text-2xl mb-[30px] mt-[30px]">{data.title}</h1>
              <div className="flex w-full">
                <picture className="w-[50%]">
                  <img
                    src={data.poster}
                    alt="movie picture"
                    className="h-[700px] m-0 w-[100%]"
                  />
                </picture>
                <div className="w-[50%] pl-5">
                  <h2 className="text-xl">Description: </h2>
                  <p>{data.fullplot}</p>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">Directors:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.directors[0]}, {data.directors[1]}
                    </p>
                  </div>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">Countries:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.countries}
                    </p>
                  </div>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">IMDB Rating:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.imdb.rating}
                    </p>
                  </div>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">Year:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.year}
                    </p>
                  </div>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">Genres:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.genres[0]}, {data.genres[1]}, {data.genres[2]}
                    </p>
                  </div>
                  <div className="pt-3 flex ">
                    <h2 className="text-xl">Type:</h2>
                    <p className="flex items-center pl-3 justify-center">
                      {data.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
