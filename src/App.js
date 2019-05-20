import React from 'react';
import './App.css';

import Form from "./components/Form";

const API_KEY = "ad3e0a5631c7c6fd39d45b5e47bab5c9";

class App extends React.Component {

    getRecipe = async (e) =>  {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();

        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`);
        const data = await api_call.json();

        console.log(data);
    };

    render() {
        return (

                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">React Search</h1>
                    </header>
                    <Form getRecipe={this.getRecipe}/>
                </div>
            
        );
    }
}

export default App;
