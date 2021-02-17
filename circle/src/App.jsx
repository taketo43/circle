import React from 'react';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topics: defaultDataset,
      items: []
    }
  }

  componentDidMount() {
    this.setState({items: this.state.topics})
  }

  filterList = (e) => {
    const updateList = this.state.topics.filter((item) => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  render () {
    return (
      <div>
        <form action=''>
          <input type='text' placeholder='search' onChange={this.filterList} />
        </form>
        <div>
          {this.state.items.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </div>
      </div>
    )
  };
}