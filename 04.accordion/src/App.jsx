import React, { useState } from 'react'
import data from './Data'
import Question from './Question'

const App = () => {

  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {
            questions.map(question => {
              return (
                <Question key={question.id} {...question}></Question>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App
