import { Component } from 'react'

class ResultListItem extends Component<{name: string, description: string}>  {
    
  render() {
    return <div className='result-list-item'>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        </div>
  }
}

export default ResultListItem
