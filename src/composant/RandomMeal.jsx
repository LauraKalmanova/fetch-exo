
const RandomMeal = ({meals}) => {

    const randomMeal = meals[Math.floor(Math.random()*meals.length)];


    return (
        <div>
            <h2>Try this one!</h2>
                <h4>{randomMeal.strMeal}</h4>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
        </div>
    );

}

export default RandomMeal;