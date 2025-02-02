import { Component } from 'react'
import './App.css'
import Search from './components/search';
import Results from './components/results';

class App extends Component  {
state = {
  items:[{name:'1111', description:'sssssss'}]
}
  render() {
    return <>
    <Search/>
    <Results items={this.state.items}/>
    </>;
  }
}

export default App
