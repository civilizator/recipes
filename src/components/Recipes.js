import React from 'react';

import {Link} from 'react-router-dom';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            { props.recipes &&
                props.recipes.map( (recipe) => {
                        return (
                            <div key={recipe.recipe_id} className="col-md-4">
                                <div className="recipes__box">
                                    <img className="recipes__box-img" src={recipe.image_url} alt={recipe.title}/>
                                    <div className="recipe__text">
                                        <h6 className="recipes__title">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 23)}...`}</h6>
                                        <p className="recipes__subtitle">Publiser: <span>{recipe.publisher}</span></p>
                                        <button className="recipe_buttons">
                                            <Link to={{
                                                pathname: `/recipe/${recipe.recipe_id}`,
                                                state: {recipe: recipe.title}
                                            }}>View Recipe</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )
            }
        </div>
    </div>

);

export default Recipes;
