import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./countries.css";
import Country from "./Country";
const Countries = (props) => {
  return (
    <section className="countries">
      {props.countries.map((country) => {
        const newCountry = { country, id: uuidv4() };
        return <Country {...newCountry} key={newCountry.id}></Country>;
      })}
    </section>
  );
};

export default Countries;
