import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const api = await fetch(url)
      const tours = await api.json()
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  //console.log(tours);

  // Remove Tour
  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  // while load tour data, show loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // if tours length is zero, show refresh button
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className='btn' onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
