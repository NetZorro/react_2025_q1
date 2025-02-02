import { Component } from 'react'

class Search extends Component  {
  state = {
    searchterm: '',
  };
  constructor (props: any) {
    super(props);
}

componentDidMount() {
  const searchterm = localStorage.getItem('searchterm');

  this.setState({
    searchterm: searchterm
  });
}

handleSearchChange = (e:any) => {
  const newsearchterm = e.target.value;
  this.setState({
    searchterm: newsearchterm
  });
  localStorage.setItem('searchterm', newsearchterm);
}

  render() {
    return <div className='search-container'>
        <input title='search' className='search-input' name="search" value={this.state.searchterm} onChange={this.handleSearchChange} />
        <button >Search</button>
      </div>;
  }
}

export default Search
