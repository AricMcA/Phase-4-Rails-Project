import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/user'

const SpellForm = ({addSpellFlag}) => {
    
    const [ name, setName] = useState("")
    const [ description, setDescription] = useState("")
    const [ lethal, setLethal] = useState("")
    const { addSpell } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSpell({
            name: name,
            lethal: lethal,
            description: description
        })
        addSpellFlag()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>Was it Lethal?:</label>
                <input type='text' id='lethal' value={lethal} onChange={(e) => setLethal(e.target.value)}/>
                <br/>
                <label>Description:</label>
                <input type='text' id='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default SpellForm
