import React, { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchCards from "./component/Search-card/searchCards.components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchCards
          handleSearch={this.handleSearch}
          placeholder="Search Monsters"
          value = {this.state.searchField}
        />

        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
