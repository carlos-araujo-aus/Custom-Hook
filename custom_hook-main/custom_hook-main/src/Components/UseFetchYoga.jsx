import { useState, useEffect } from 'react'

const UseFetchYogaData = (url) => {
    const [dataYoga, setDataYoga] = useState([])

    useEffect(() => {
        fetch (url)
        .then ((response) => response.json())
        .then ((dataYoga) => setDataYoga(dataYoga))
        .catch((error) => console.error("Error fetching yoga data: ", error))
    }, [])

    return [dataYoga]

}

export default UseFetchYogaData