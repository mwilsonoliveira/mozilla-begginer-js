import React, { Component } from 'react'

const Teste = (props) => {
  return <h2>{props.name}</h2>;
}

const Teste2 = (props) => {
  console.log(props.name)
  //const theSplit = props.name.split(',')
  return(
    <div>
      <p>{props.name[0]}</p>
      <p>{props.name[1]}</p>
      <p>{props.name[2]}</p>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Teste name={[1,2,3]}/>
          <Teste2 name={[1,2,3]}/>
        </header>
      </div>
    )
  }
}

export default App