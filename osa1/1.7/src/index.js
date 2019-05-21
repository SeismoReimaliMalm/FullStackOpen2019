import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  const App = () => {
  // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Anna palautetta</h1>
            <button onClick={() => setGood(good + 1)}>
                Hyvä
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                Neutraali
            </button>
            <button onClick={() => setBad(bad + 1)}>
                Huono
            </button>
            <h1>statistiikka</h1>
            <p>hyvä {good}</p>
            <p>neutraali {neutral}</p>
            <p>huono {bad}</p>
            <p>yhteensä {good+neutral+bad}</p>
            <p>keskiarvo {(good-bad)/(good+neutral+bad)*100}</p>
            <p>positiivisia {(good)/(good+neutral+bad)*100}</p>
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)