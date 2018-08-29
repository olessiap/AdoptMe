import React from react; 
import ReactDOM from "react-dom";
import pf from "petfinder-client";
import Pet from ".Pet";



const petfinder = pf({
    key: process.env.API_KEY,
    secret:process.env.API_SECRET
});

class App extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
    pets: []
    };
    }

    render() {
        return(
            <div>
                <h1>Adopt Me!</h1>
                <div className="search">
                
                </div>
            </div>
        )
    }
}
