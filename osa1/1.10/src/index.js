import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => (
  <div>
    <p>
      {props.name} {props.value}
    </p>
  </div>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props

  if(good + neutral + bad>0){
    return(
      <div>
      <Statistic name="hyvä" value={good}/>
      <Statistic name="neutraali" value={neutral}/>
      <Statistic name="huono" value={bad}/>
      <Statistic name="yhteensä" value={good+neutral+bad}/>
      <Statistic name="keskiarvo" value={(good-bad)/(good+neutral+bad)*100}/>
      <Statistic name="positiivisia" value={(good)/(good+neutral+bad)*100}/>
    </div>
    )
  } else {
    return(
    <div>
    <p>Ei yhtään palautetta annettu</p>
    </div>
    )    
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
// tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
      <div>
          <h1>Anna palautetta</h1>
          <Button text="Hyvä" handleClick={() => setGood(good + 1)}/>
          <Button text="Neutraali" handleClick={() => setNeutral(neutral + 1)}/>
          <Button text="Huono" handleClick={() => setBad(bad + 1)}/>
          <h1>statistiikka</h1>
          <Statistics good={good} neutral={neutral} bad={bad}  />
     </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)