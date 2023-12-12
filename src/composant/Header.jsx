import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <header>
        
        <h1>Jimmy's Famous Meals</h1>

        <img src="https://th.bing.com/th/id/R.7b1dfc0205d70c78be4eee65e7e709c5?rik=K9mRw6qRvVQjUQ&pid=ImgRaw&r=0" alt="Meals logo" />
  
        <nav>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/categories" className="nav-link">Categories</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cuisine" className="nav-link">Cuisine</Link>
                </li>
                <li className="nav-item">
                    <Link to="/recettes" className="nav-link">Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ingredients" className="nav-link">Ingredients</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;