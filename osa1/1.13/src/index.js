import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [items, setItems] = useState([]);

  if(items.length===0){
    const copy=[]
    copy.length=props.anecdotes.length;
    for(var i=0;i<props.anecdotes.length;i++){
      copy[i]=0
    }
    setItems(copy)
  }  
  console.log(items)
  return (
    <div>
      <Button text="Satunnainen anekdootti" handleClick={() => setSelected(Math.floor((Math.random() * props.anecdotes.length)))}/>  
      <Button text="vote" handleClick={() => {const copy = [...items];copy[selected]+=1;setItems(copy)}}/>  
      <p>
      {props.anecdotes[selected]}
      </p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)