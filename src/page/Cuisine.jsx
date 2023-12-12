import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Cuisine = () => {
    const [cuisines, setCuisines] = useState(null);

    useEffect(() => {
        (async () => {
            const cuisineResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
            setCuisines(await cuisineResponse.json());
        })();
    }, []);
    
    return (
      <div>
        <Header />
            {cuisines ? (
                <>
                    {cuisines.meals.map((cuisine) => {
                        return (
                            <article>
                                <h3>{cuisine.strArea}</h3>
                            </article>
                        );
                    })}
                </>
            ) : (
                <p>Cuisines are charging</p>
            )}
        <Footer />
      </div>  
    );
}

export default Cuisine;