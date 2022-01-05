import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UsersSpells = () => {

    const { id } = useParams();

    const [ userSpells, setUserSpells ] = useState([])

    useEffect(() => {
        fetch(`/users/${id}/spells`)
        .then(res => res.json())
        .then(data => setUserSpells(data))
    }, [])

    const userSpellsList = userSpells.map(s => <li key={s.id}>{s.name}: {s.description} -- {s.lethal}</li>)

    return (
        <div>
            {userSpellsList}
        </div>
    )
}

export default UsersSpells
