import React from 'react';

/**
 * Get the data form the back end
 */

export async function getData(input){
    const result = await fetch (`Recipes/search/${input}`,{
        method:"GET"
    });
    console.log(result);
    const json = await result.json();
    return json;
}