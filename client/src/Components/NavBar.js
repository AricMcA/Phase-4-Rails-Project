import React, { useContext } from 'react'
import { UserContext } from '../Context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn && user) {
        return (
            <div>
                <h3>Welcome {user.username}...</h3>
                <br/>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to="/spells">
                    <button>Spells</button>
                </NavLink>
                <NavLink to="/users">
                    <button>Users</button>
                </NavLink>
                <hr/>
            </div>
        )
    } else{
        return (
            <div>
                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
                <NavLink to="/signup">
                    <button>Signup</button>
                </NavLink>
                <NavLink to="/users">
                    <button>Users</button>
                </NavLink>
                <hr/>
            </div>
        )
    }
}

export default NavBar
