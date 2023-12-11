import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <header>
        
        <h1>Jimmy's Meals Famous</h1>

        <img src="https://th.bing.com/th/id/R.7b1dfc0205d70c78be4eee65e7e709c5?rik=K9mRw6qRvVQjUQ&pid=ImgRaw&r=0" alt="Meals logo" />
  
        <nav>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/categories">Categories</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/cuisine">Cuisine</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to="/recettes">Recipes</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to="/ingredients">Ingredients</Link></a>
                </li>
            </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;