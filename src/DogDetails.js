import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Nav from "./Nav.js";

function DogDetails({dogsData}) {
    const { name } = useParams();

    let dog;
    for (let index in dogsData) {
        if (dogsData[index].src === name) {
            dog = dogsData[index]
        }
    }
    if (!dog) return <Redirect to="/dogs"/>

    const src = require(`./images/${name}.jpg`)
    return (
        <>
            <Nav dogs={dogsData}/>
            <h4>Name: {dog.name}</h4>
            <p>Age: {dog.age}</p>
            <p>fun facts about this dog</p>
            <ul>
                {dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
            </ul>
            {src ? <img src={src.default} alt={name} /> : null}
        </>
    );
}

export default DogDetails;