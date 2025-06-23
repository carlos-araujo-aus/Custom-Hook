import UseFetchYogaData from "./UseFetchYoga"
import './FetchData.css'

const FetchYogaData = () => {
    const [dataYoga] = UseFetchYogaData("https://api.npoint.io/4459a9a10e43812e1152")
    console.log(dataYoga)

    return (
        <>
            <h2 className='usefetch_heading'>Yoga Data Fetching</h2>
            <ul className='list_data_main'>
                {
                    dataYoga && dataYoga.map((item, index) => (
                        <li className='list_data' key={index}>
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Benefits: </strong>{item.benefits}</p>
                            <p><strong>Time Duration: </strong>{item.time_duration}</p>
                        </li>
                    )) 
                }
            </ul>
        </>
    )
}

export default FetchYogaData