import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const MealDetails = () => {

    const {id} = useParams();

    const [meal, setMeal] = useState(null);

    useEffect(() => {

        (async () => {
            const mealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
            const mealResponseData = await mealResponse.json();
            setMeal(mealResponseData.meals[0]);
            
        })()
    }, [])
 
    return (
        <div>
            <Header />
                {meal ? (
                    <article>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strInstructions}</p>
                    </article>
                ) : (
                    <p>The recipe is loading</p>
                )}
            <Footer />
        </div>
    )
};

export default MealDetails;