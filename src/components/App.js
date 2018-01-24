import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFuits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFuits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return(
      <FruitBasket
        updateFilterCallback={this.updateFilterCallback}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
      />
    )
  }
}

export default App;
