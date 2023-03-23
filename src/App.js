
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = () => {
  const syllabus = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
    <div>{syllabus[0].part} {syllabus[0].exercises}</div>
    <div>{syllabus[1].part} {syllabus[1].exercises}</div>
    <div>{syllabus[2].part} {syllabus[2].exercises}</div>
    </div>

  )
}

const Content = (props) => {
  return (
    <div>
      <Part />
      <br />
      <Part />
      <br />
      <Part />
    </div>

  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1} + {props.exercises2} + {props.exercises3}
      </p>
    </div>
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


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

    </div>
  )

}



export default App;
