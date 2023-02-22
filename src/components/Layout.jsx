import {Outlet, Link} from 'react-router-dom'


const Layout=() => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="./Usuario">Usuario</Link>
                </li>
                <li>
                    <Link to="./Favorito">Favorito</Link>
                </li>
                <li>
                    <Link to="./Register">Register</Link>
                </li>
                <li>
                    <Link to="./Login">Login</Link>
                </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
    
  )
}

export default Layout