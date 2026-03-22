import { useState, useEffect } from 'react'
import Header from './header.jsx'
import Loader from './loader.jsx' 

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) 
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Loader /> : <Header />}
    </>
  )
}

export default App
