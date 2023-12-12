import Header from "../composant/Header";
import Footer from "../composant/Footer";
import LastThreeMeals from "../composant/LastThreeMeals";
import RandomMeal from "../composant/RandomMeal";
import {useEffect, useState} from 'react';

const Home = () => {
    
    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
            const mealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const mealsResponseData = await mealResponse.json();
            setMeals(mealsResponseData.meals);
        })();   
    }, []);


    return (
        <>
            <Header />
            {meals ? (
                <>
                    <LastThreeMeals meals={meals}/>
                    <RandomMeal meals={meals}/>
                </>
            ):(
                <p>The recipes are loading...</p>
            )}
            <Footer />
        </>
    )
}

export default Home;