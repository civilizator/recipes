import React from 'react';
import './App.css';

import Form from "./components/Form";

class App extends React.Component {
    getRecipe(e) {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        console.log("Worked!: " + recipeName);
    }

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
