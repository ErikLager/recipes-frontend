/**
 * Get the data form the back end
 */

export async function randomRec(){
    const result = await fetch (`/Recipes/random`,{
        method:"GET"
    });
    console.log(result);
    const json = await result.json();
    return json;
}