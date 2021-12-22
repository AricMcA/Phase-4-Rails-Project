import React, { useContext } from 'react'
import { UserContext } from '../Context/user'

const Home = () => {

    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn && user){
        return (
            <div>
                <h1>Wizarding World Spell Journal</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Wizarding World Spell Journal</h1>
                <h3>Please Login or Signup to continue...</h3>
            </div>
        )
    }
}

export default Home
