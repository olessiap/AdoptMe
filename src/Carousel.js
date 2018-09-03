import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0 //sets current img to the first img
  };

  //props coming in from parent and updats the state to whatever the prop is now.
  //everytime the prop changes it changes the state
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      //carousel displays first image as large
      //carousel-smaller displays all other imgs
      <div className="carousel">
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
