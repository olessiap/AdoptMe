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
  //rendered to the dom for the first time, now ready to do other stuff
  componentDidMount() {
    petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havansese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Pumpkin" animal="cat" breed="Orange Tab" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
