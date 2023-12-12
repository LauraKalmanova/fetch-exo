
const LastThreeMeals = ({meals}) => {

    
    const lastThreeMeals = meals.slice(-3);
            

    return (
        <div>
            <h2>Last three recipes added:</h2>
            {lastThreeMeals ? (
                <>
                    {lastThreeMeals.map((meal) => {
                        return (
                            <article>
                                <h4>{meal.strMeal}</h4>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                            </article>
                        )
                    })}
                </>
            ):(
                <p>The last recipes are loading...</p>
            )}
        </div>
    )

};

export default LastThreeMeals;