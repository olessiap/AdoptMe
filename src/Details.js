import React from "react";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  //make all the API requests
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city}, ${
            data.petfinder.pet.contact.state
          }`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed: breed,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading..</h1>;
    }
    const { name, animal, location, description, media, breed } = this.state;
    return (
      <div className="details">
        <h1>{name} </h1>
        <h2>
          {animal} - {breed} - {location}{" "}
        </h2>
        <p> {description} </p>
      </div>
    );
  }
}

export default Details;
