import { Component } from 'react'
import './App.css'
import Search from './components/search';
import Results from './components/results';

class App extends Component  {

  render() {
    return <>
    <Search/>
    <Results/>
    </>;
  }
}

export default App
