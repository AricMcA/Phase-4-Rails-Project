import React, { useContext } from 'react'
import { UserContext } from '../Context/user'

const Home = () => {

    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn && user){
        return (
            <div>
                <h3>{user.username}'s Homepage</h3>
            </div>
        )
    } else {
        return (<h3>Please Login or Signup to continue...</h3>)
    }
}

export default Home
