import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Tienda en linea</h1>
            <nav>
                <ul>
                    <li>lacteos</li>
                    <li>farmacia</li>
                    <li>belleza</li>
                    <li>electronica</li>
                </ul>
            </nav>
            
            <CartWidget/>
       
    </header>
  )
}

export default NavBar