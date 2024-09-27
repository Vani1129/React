
// import { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/Vani1129')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <>
        <div className='text-center bg-zinc-400 '>GitHub followers:{data.followers}</div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </>
    
  )
}

export default GitHub


// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Vani1129')
  return response.json()
}