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
                <h3>{user.username}'s Homepage</h3>
                <br/>
                <button onClick={logoutUser}>Logout</button>
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
            </div>
        )
    }
}

export default NavBar
