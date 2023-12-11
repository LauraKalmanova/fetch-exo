import {useEffect, useState} from 'react';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
            setIngredients(await ingredientsResponse.json());
        })();
    }, []);

    return (
      <div>
        {ingredients ? (
            <>
                {ingredients.meals.map((ingredient) => {
                    return (
                        <article>
                            <h3>{ingredient.strIngredient}</h3>
                            <p>{ingredient.strDescription}</p>
                        </article>
                    );
                })}
            </>
        ) : (
            <p>Ingredients are charging</p>
        )}
      </div>  
    );
}

export default Ingredients;