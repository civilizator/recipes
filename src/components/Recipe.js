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
        this.setState({activeRecipe: res.recipes[0]});
        console.log(this.state.activeRecipe);
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
          <div className="container">
            <div className="active-recipe">
                <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                <h1 className="active-recipe__title">{recipe.title}</h1>
            </div>
          </div>
        );
    }
}

export default Recipe;
