import React from 'react';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            {props.recipesVal.map((recipe) => {
                return (
                    <div key={recipe.recipe_id} className="col-md-4">
                        <div className="recipes__box">
                            <img className="recipes__box-img" src={recipe.image_url} alt={recipe.title}/>
                            <div className="recipe__text">
                                <h6 className="recipes__title">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 23)}...`}</h6>
                                <p className="recipes__subtitle">Publiser: <span>{recipe.publisher}</span></p>
                                <button className="recipe_buttons">View Recipe</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;
