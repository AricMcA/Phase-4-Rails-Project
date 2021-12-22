import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

const UserProvider = ({children}) => {
    
    const [ user, setUser ] = useState(null)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ spells, setSpells ] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchSpells()
            }
        })
    },[])

    const fetchSpells = () => {
        fetch('/spells')
        .then(res => res.json())
        .then(data => {
            setSpells(data)
        })
    }

    const addSpell = (spell) => {
        fetch('/spells', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(spell)
        })
        .then(res => res.json())
        .then(data => {
            setSpells([...spells, data])
        })
    }

    const login = (user) => {
        setUser(user)
        fetchSpells()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        fetchSpells()
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        fetchSpells()
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, spells, addSpell}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };
