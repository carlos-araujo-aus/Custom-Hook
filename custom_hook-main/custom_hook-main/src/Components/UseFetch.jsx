import { useState, useEffect } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then ((data) => setData(data))
        .catch((error) => console.error("Error fetching data: ", error))
    }, [])

    return [data]
    
}

export default UseFetch
