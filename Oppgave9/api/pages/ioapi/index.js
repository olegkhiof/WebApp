import { useState } from 'react'
import axios from 'axios'


const CreateListItem = () => {
  const [listItem, setListItem] = useState()

  const handlePost = async (event) => {
    event.preventDefault()
    if(listItem != null){
    const data = await axios.post('/api/api', { listItem })
    console.log(data)}
    else console.log("need actual data in the list m8")

  }

  const handleGet = async (event) => {
    event.preventDefault()
    const data = await axios.get('/api/api')
    console.log(data)
  }

  return (
    <form onSubmit={handlePost}>
      <input type="text" value={listItem} onChange={(e) => setListItem(e.target.value)}/>
      <button type="submit">Post</button>
      <button onClick={handleGet}>Get</button>
    </form>
  )
}

export default CreateListItem