import {useEffect, useState} from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Categories = () => {
    
    const [catgrys, setCatgry] = useState(null);

    useEffect(() => {
        (async () => {
            const catgryResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
            setCatgry(await catgryResponse.json());
        })();
    }, []);

    return (
      <div>
        <Header />
            {catgrys ? (
                <>
                    {catgrys.meals.map((catgry) => {
                        return (
                            <article>
                                <h3>{catgry.strCategory}</h3>
                            </article>
                        );
                    })}
                </>
            ) : (
                <p>Categories are charging</p>
            )}
        <Footer />
      </div>  
    );
}

export default Categories;