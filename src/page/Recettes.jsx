import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import {Link} from 'react-router-dom';



const Recettes = () => {

    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            setMeals(await mealsResponse.json());
        })();
    }, []);

    return (
      <div>
        <Header />
            {meals ? (
                <>
                    {meals.meals.map((meal) => {
                        return (
                            <article>
                                <h3>{meal.strMeal}</h3>
                                <Link to={"/meal/details/${meal.idMeal}"}>See the recipe</Link>
                            </article>
                        );
                    })}
                </>
            ) : (
                <p>Recettes en cours de récupération</p>
            )}
        <Footer />
      </div>  
    );
};

export default Recettes;