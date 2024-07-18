import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [res, setRes] = useState<string | null>(null)

useEffect(() => {
  const ping = async() => {
    const res = await axios.get<string>("http://localhost:5053/api/ping")
    setRes(res.data)
  }
  ping()
}, [])

  return (
    <>
     <p>{res}</p>
    </>
  )
}

export default App
