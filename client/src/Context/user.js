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

    const editSpell = (spell) => {
        console.log(spell)
        fetch(`/spells/${spell.id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(spell)
        })
        .then(res => res.json())
        .then(spell => {
            const newSpells = spells.filter(s => s.id !== spell.id)
            const updatedSpells = [...newSpells, spell]
            setSpells(updatedSpells)
        })
    }

    const deleteSpell = (id) => {
        fetch(`/spells/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(() => {
            const newSpells = spells.filter(s => s.id !== id)
            setSpells(newSpells)
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
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, spells, addSpell, deleteSpell, editSpell}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };
