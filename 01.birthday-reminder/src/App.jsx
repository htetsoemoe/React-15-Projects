import React, { useState } from 'react'
import data from './Data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
      </section>
    </main>
  )
}

export default App