import { Component } from 'react'
import ResultListItem from './result-list-item';

class Results extends Component<{items:{name:string, description:string}[] }>  {
    
  render() {
    return <div>
            { this.props.items.map(_ => <ResultListItem name={_.name} description={_.description} /> )}
        </div>;
  }
}

export default Results
