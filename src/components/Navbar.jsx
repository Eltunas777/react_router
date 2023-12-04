import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-bold" : ""} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-bold" : ""} to='/users'>Usuarios</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-bold" : ""} to='/About'>About</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar