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
  //make arrow function to avoid THIS returning undefined
  handleClickIndex = event => {
    this.setState({
      active: +event.target.dataset.index //returns a string so convert to number with the plus
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      //carousel displays first image as large
      //carousel-smaller displays all other imgs
      <div className="carousel">
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleClickIndex}
              key={photo.value}
              src={photo.value}
              data-index={index} //changes primary img
              className={index === active ? "active" : ""} //active is a number
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
