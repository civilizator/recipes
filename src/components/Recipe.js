import React from 'react';

// const API_KEY = "ad3e0a5631c7c6fd39d45b5e47bab5c9";
const API_KEY = "73ca04584c426b6e1a9376f4193ed68c";

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        console.log(res.recipes[0]);
    };

    render() {
        return (
          <div>Recipe Component!</div>
        );
    }
}

export default Recipe;
