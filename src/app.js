import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

//sets up the api
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          //// if multiple array of multiple pets exists
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            //turns into array if 1 breed returned
            pets = [data.petfinder.pets.pet];
          }
        } else {
          //if finds nothing
          pets = [];
        }
        this.setState({
          // give it object of things to update, a shallow merge
          pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id} //must be unique
                name={pet.name}
                animal={pet.animal}
                breed={breed}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
