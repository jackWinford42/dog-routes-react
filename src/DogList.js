import React from "react";
import Nav from "./Nav.js";
function DogList({dogsData}) {
    const dogComponents = dogsData.map(dog => (
        <>
            <h4>Name: {dog.name}</h4>
            <p>Age: {dog.age}</p>
            <p>fun facts about this dog</p>
            <ul>
                {dog.facts.map((fact, i) => <li>{fact} key={i}</li>)}
            </ul>
        </>
    ));

    return (
        <div>
            <Nav dogs={dogsData}/>
            <ul>{dogComponents}</ul>
        </div>
    );
}

export default DogList;