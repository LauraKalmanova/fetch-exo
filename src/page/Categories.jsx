import {useEffect, useState} from 'react';

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
      </div>  
    );
}

export default Categories;