import React, {useState, useEffect} from 'react'

const DarkArts = () => {
    const [darkArts, setDarkArts] = useState([]);

    useEffect(() => {
        fetch('/darkarts')
        .then(res => res.json())
        .then(data => setDarkArts(data))
    }, [])

    const darkArtsList = darkArts.map(d => <li>{d.name}: {d.user.username}</li>)

    return (
        <div>
            {darkArtsList}
        </div>
    )
}

export default DarkArts
