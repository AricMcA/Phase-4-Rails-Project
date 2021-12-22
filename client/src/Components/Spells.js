import React, { useState, useContext } from 'react'
import { Route, useParams } from 'react-router-dom'
// import SpellForm from './SpellForm'
// import SpellLinks from './SpellLinks'
// import Spell from './Spell'
import { UserContext } from '../Context/user'
import SpellForm from './SpellForm'

const Spells = () => {

    const { spells, loggedIn } = useContext(UserContext)
    const [ formFlag, setFormFlag ] = useState(false)
    const params = useParams()

    const addSpellForm = () => {
        setFormFlag(false)
    }
    
    if (loggedIn) {
        const spellsList = spells.map(s => <li key={s.id}>{s.name}</li>)
        return (
            <div>
                <h3>Spells:</h3>
                {spellsList}
                <br/>
                {formFlag ? 
                    <SpellForm addSpell={addSpellForm} /> : <button onClick={() => setFormFlag(true)}>Add Spell</button>
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
