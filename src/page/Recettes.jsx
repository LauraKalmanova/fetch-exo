
import {useState} from 'react';
const Recettes = () => {

    const [meals, setMeals] = useState(null);

    if (meals === null) {
        (async () => {
            const mealsResponse = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(await mealsResponse.json());
        })();
    }

    return (
      <div>
        {meals ? (
            <>
                {meals.meals.map((meal) => {
                    return (
                        <article>
                            <p>{meal.strMeal}</p>
                        </article>
                    );
                })}
            </>
        ) : (
            <p>Recettes en cours de récuperation</p>
        )}
      </div>  
    );
};

export default Recettes;