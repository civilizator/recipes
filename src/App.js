import React from 'react';
import './App.css';

import Form from "./components/Form";

const API_KEY = "ad3e0a5631c7c6fd39d45b5e47bab5c9";

class App extends React.Component {
    state = {
        recipes: []
    };

    getRecipe = async (e) => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`);
        const data = await api_call.json();
        this.setState();
        console.log(data.recipes[3].recipe_id);
    };

    render() {
        return (
            <>
                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">React Search</h1>
                    </header>
                    <Form getRecipe={this.getRecipe}/>
                </div>
            </>
        );
    }
}

export default App;
