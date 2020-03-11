import React from "react";

import Recipes from ".//recipes.js";


/**
 * 
 * @param {Recipes} props.recipes 
 */
export default function Data({ recipes }) {
    return (
        <div>
            {recipes.map((recipes) =>
                <div>{recipes.name}</div>)
            }
        </div>
    )
}