import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15")
  console.log(data)

  return (
    <>
      <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>
        {
        data && data.map((item, index) => (
        <li className="list_data"key={index}>
          <p><strong> Name: </strong>{item.name}</p>
          <p><strong> Benefits: </strong>{item.benefits}</p>
          <p><strong> Best Time to Intake: </strong>{item.best_time_to_intake}</p>
        </li>))
        }
      </ul>
    </>
  )
}

export default FetchData