import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}  {props.exercice}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercice={props.exercices[0]}/>
      <Part part={props.parts[1]} exercice={props.exercices[1]}/>
      <Part part={props.parts[2]} exercice={props.exercices[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
       <p>yhteensä {props.exercices} tehtävää</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  const partArray = [part1,part2,part3]
  const ExericesArray = [exercises1,exercises2,exercises3]
  return (
    <>
    <Header course={course}/>
    <Content parts={partArray} exercices={ExericesArray}/>
    <Total exercices={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))