import { Component, useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
// import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);

  console.log('render');

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  console.log({searchField});

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

    // this.setState(() => {
    //   return { searchField };
    // });
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
    <h1 className="app-title">Monsters Rolodex</h1>

    <SearchBox 
    className='monsters search-box'
    onChangeHandler={onSearchChange} 
    placeholder={'Search monsters'}/>

      {
        // filteredMonsters.map((monster) => {
        //   return <div key={monster.id}>
        //   <h1>{monster.name}</h1>
        //   </div>;
        // }
        
        // )
      }
      <CardList monsters={filteredMonsters}/>
    </div>
    );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//     console.log('constructor');
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     },
//     () => {
//       console.log(this.state);
//     }
//     ));

//     console.log('componentDidMount')
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);

//     // this.setState(() => { 
//     //   return {monsters: this.state.monsters.filter(el => el === event.target.value)}
//     //   });

//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     }
//     );
//   }

//   render() {
//     console.log('render');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this; 

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 clasName="app-title">Monsters Rolodex</h1>

//       <SearchBox 
//       className='monsters search-box'
//       onChangeHandler={onSearchChange} 
//       placeholder={'Search monsters'}/>

//         {
//           // filteredMonsters.map((monster) => {
//           //   return <div key={monster.id}>
//           //   <h1>{monster.name}</h1>
//           //   </div>;
//           // }
          
//           // )
//         }
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
