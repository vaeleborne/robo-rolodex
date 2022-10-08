import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardListComponent from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };

    console.log("Constructor");
  }

  componentDidMount() {
    console.log('component did mount');

    //Fetching a list of 'users' from api that is a placeholder 
    fetch('https://jsonplaceholder.typicode.com/users')
    //After fetch get json from response
    .then((response) => response.json())
    //The json contains an array of objects called users, we are setting our robots to be equal to that
    .then((users) => 
      //Sets our state robot variable
      this.setState(
        () => {
          return {robots: users}
        }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return {searchField}
    })
  }

  render()
  {
    console.log('Render');
    const {robots, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots.filter( (robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    })


    return (
      <div className="App">
        <h1 className='app-title'>Robo Rolodex</h1>

        <SearchBox 
          className='robots-search-box'
          onChangeHandler= {onSearchChange}
          placeholder= 'search robots'
        />

        <CardListComponent robots= {filteredRobots} />
      </div>
    );
  }
}


export default App;
