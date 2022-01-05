import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Users = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const usersList = users.map(u =><li> <Link to={`/users/${u.id}/spells`}>{u.username}</Link> </li>
    )

    return (
        <div>

            <h2>Users:</h2>
            <ul>
            {usersList}
            </ul>
        </div>
    )
}

export default Users
