import React from 'react';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            {props.recipesVal.map((recipe) => {
                return (
                    <div key={recipe.recipe_id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image_url} alt={recipe.title}/>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;
