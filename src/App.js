import React from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

// const API_KEY = "ad3e0a5631c7c6fd39d45b5e47bab5c9";
const API_KEY = "73ca04584c426b6e1a9376f4193ed68c";

class App extends React.Component {

    state = {
        recipesVal: []
    };

    getRecipe = async (e) => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
        const data = await api_call.json();
        this.setState({recipesVal: data.recipes});
        console.log(this.state.recipesVal);
    };

    render() {
        return (
            <>
                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">React Search</h1>
                    </header>

                    <Form getRecipe={this.getRecipe}/>

                    <Recipes recipesVal={this.state.recipesVal}/>

                    {/*{this.state.recipesVal.map((recipe) => {*/}
                        {/*return (*/}
                            {/*<div key={recipe.recipe_id}>*/}
                                {/*<h3>{recipe.title}</h3>*/}
                                {/*<img src={recipe.image_url} alt={recipe.title}/>*/}
                            {/*</div>*/}
                        {/*);*/}
                    {/*})}*/}

                </div>
            </>
        );
    }
}

export default App;
