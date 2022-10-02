import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course})=><h1>{course}</h1>

const Part = ({part, exercises})=>{
  return(
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  let {part1, part2, part3} = parts;
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </>
  )
}

const Total = ({exercises})=> {
  let exercisesTotal = 0;
  Object.keys(exercises).forEach((element) => {
      exercisesTotal+=exercises[element];
  });
  return (
      <p>
        Number of Excercises {exercisesTotal}
      </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  const parts = {
    part1,
    part2,
    part3,
  }

  const exercises = {
    part1: part1.exercises,
    part2: part2.exercises,
    part3: part3.exercises
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))