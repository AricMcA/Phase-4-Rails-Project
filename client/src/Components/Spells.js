import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
// import SpellForm from './SpellForm'
// import SpellLinks from './SpellLinks'
// import Spell from './Spell'
import { UserContext } from '../Context/user'
import SpellForm from './SpellForm'
import SpellEditForm from './SpellEditForm'

const Spells = () => {

    const { spells, loggedIn, deleteSpell, editSpell } = useContext(UserContext)
    const [ formAddFlag, setFormAddFlag ] = useState(false)
    const [ formEditFlag, setFormEditFlag ] = useState(false)
    const [ editingSpell, setEditingSpell ] = useState([])
    const params = useParams()

    const addSpellForm = () => {
        setFormAddFlag(false)
    }

    const handleDelete = (id) => {
        deleteSpell(id)
    }

    const editSpellForm = (spell) => {
        setEditingSpell(spell)
        setFormEditFlag(true)
    }

    const editingSpellForm = () => {
        setFormEditFlag(false)
    }
    
    if (loggedIn) {
        const spellsList = spells.map(s => <li key={s.id}>{s.name}: {s.description} -- {s.lethal} <button onClick={() => handleDelete(s.id)}>DELETE</button> <button onClick={() => editSpellForm(s)}>Edit</button> </li>)
        return (
            <div>
                <h3>Spells:</h3>
                {spellsList}
                <br/>
                {formAddFlag ? 
                    <SpellForm addSpellForm={addSpellForm} /> : <button onClick={() => setFormAddFlag(true)}>Add Spell</button>
                }
                {formEditFlag ? 
                    <SpellEditForm editSpell={editingSpell} editSpellForm={editingSpellForm}/> : null
                }
            </div>
        )
    } else {
        return (
            <div>
                <h3>Not Authorized- Login or Signup to continue...</h3>
            </div>
        )
    }
}

export default Spells
