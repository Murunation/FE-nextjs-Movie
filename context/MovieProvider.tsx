import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export default function MainHandlers({ children }): JSX.Element {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getTheaters")
      .then((response) => setProduct(response.data));
  });

  return (
    <MovieContext.Provider value={{ product, setProduct }}>
      {children}
    </MovieContext.Provider>
  );
}
