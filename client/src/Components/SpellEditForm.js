import React, {useContext, useState} from 'react'
import { UserContext } from '../Context/user'

const SpellEditForm = (props) => {
    const { spells, editSpell } = useContext(UserContext)
    const [ name, setName] = useState(spells.name)
    const [ description, setDescription] = useState(spells.lethal)
    const [ lethal, setLethal] = useState(spells.description)
    


    const handleSubmit = (e) => {
        e.preventDefault()
        editSpell({
            id: props.editSpell.id,
            name: name,
            lethal: lethal,
            description: description
        })
        props.editSpellForm()
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

export default SpellEditForm
