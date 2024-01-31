import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link,NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda en linea</h1>
      </Link>
            <nav>
                <ul>
                    <li>
                      <NavLink to="/category/2">
                        lacteos                        
                      </NavLink>
                    </li>
                    <li>
                      <NavLink  to="/category/3">
                       farmacia                        
                      </NavLink>
                    </li>            
                    
                </ul>
            </nav>
            
            <CartWidget/>
       
    </header>
  )
}

export default NavBar