import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]


   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState("")
  const [points, setPoints]= useState(new Uint8Array(6))

  
  const addPoints= () => {
    const copy = [...points]
    copy[selected] =+ 1;
    
    setPoints(copy);
    console.log(points);
    

    if(points[selected]>points[mostVoted]){
      setMostVoted(points[selected]);
    }
  }

  const randomAncedote=()=>{
    const howMany = anecdotes.length
    const getRandomInt=(max)=> {
      return Math.floor(Math.random() * max);
    }
    setSelected(getRandomInt(howMany))

  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button text="next anecdote" onClicked={randomAncedote}></Button>
      <Button text="Vote" onClicked={addPoints}></Button>
    </div>
  )
}

const Button = ({text, onClicked}) => {
  return(
  <button onClick={onClicked}>
  {text}
  </button>
  )
}

export default App