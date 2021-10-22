import React, { useState } from 'react'

const App = () => {
  const title = "Anna Palautetta"
  const statistics = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good +1)
   //console.log(good)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral +1)
    //console.log(neutral)
  }
  const handleSetBad = () => {
    setBad(bad +1)
    //console.log(bad)
  }

  const countAverage = () => {
    const positive = good
    const negative = bad
    const all = good + bad + neutral
    return(
      (positive - negative) / all
   
    )
  }

  const countAll= () => {
    return(
      good + bad + neutral
    )
  }

  const countPositive=()=>{
    const all = neutral + good + bad
    return(
      ((good / all)*100) + " %"
    )
  }


  return (
    <div>
      <Heading title= {title}/>
      <Button text={"good"} onClicked = {handleSetGood}/>
      <Button text={"neutral"} onClicked = {handleSetNeutral}/>
      <Button text={"bad"} onClicked = {handleSetBad}/>
      <Heading title={statistics}/>
      <Statistics feedback={countAll()} good={good} bad={bad} neutral={neutral} average={countAverage()} positive={countPositive()} ></Statistics>
    </div>
  )
}

  const Statistics =(props)=>{
    if(props.feedback === 0 ){
      return "No feedback given"
    }
    else{
      return(
      <table>
        <tbody>
      <StatisticsLine text={"good "} value={props.good}></StatisticsLine>
      <StatisticsLine text={"good "} value={props.good}></StatisticsLine>
      <StatisticsLine text={"neutral "} value={props.neutral}></StatisticsLine>
      <StatisticsLine text={"bad "} value={props.bad}></StatisticsLine>
      <StatisticsLine text={"all "} value={props.feedback}></StatisticsLine>
      <StatisticsLine text={"average "} value={props.average}></StatisticsLine>
      <StatisticsLine text={"positive "} value={props.positive}></StatisticsLine>
        </tbody>
      </table>
      )
    }
  }

  const StatisticsLine = (props) => { 
    return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      </tr>
    )
  }
 

  const Heading = (props) => {
    return(
    <h1>{props.title}</h1>
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