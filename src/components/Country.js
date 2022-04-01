import React from "react";
import "./country.css";
const Country = ({ country, handleRemoveCountry }) => {
  const { name, flags, capital, population, area } = country;
  return (
    <article className="country">
      <div>
        <img src={flags.png} alt={name.common} className="flag" />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          className="btn"
          onClick={() => handleRemoveCountry(name.common)}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
