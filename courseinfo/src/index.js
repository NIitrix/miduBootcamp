import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course})=><h1>{course}</h1>

const Part = ({part, exercises})=>{
  return(
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

const Content = ({parts}) => {
  let {part1, part2, part3} = parts;
  return (
    <>
      <Part part={part1.part1} exercises={part1.exercises1}/>
      <Part part={part2.part2} exercises={part2.exercises2}/>
      <Part part={part3.part3} exercises={part3.exercises3}/>
    </>
  )
}

const Total = ({exercises})=> {
  let exercisesTotal = 0;
  Object.keys(exercises).forEach((element) => {
      exercisesTotal+=exercises[element];
  });
  return (
    <>
      <p>
        Number of Excercises {exercisesTotal}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = {
    part1:{ part1, exercises1},
    part2:{ part2, exercises2},
    part3:{ part3, exercises3},
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises={{exercises1,exercises2,exercises3}}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))