import React from 'react';
import './App.css';

import Form from "./components/Form";

function App() {
    return (
        <>
            <div>
                <div className="app">
                    <header className="app-header">
                        <h1 className="app-title">React Search</h1>
                    </header>
                    <Form/>
                </div>
            </div>
        </>
    );
}

export default App;
