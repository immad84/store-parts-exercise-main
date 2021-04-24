
import '../css/App.css';
import ListParts from './ListParts';
import Search from './search';
import Part from './part';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


function App() {
  let id = 0;
  const [arrangeDir, setArrangeDir] = useState('asc');
  const [Parts, setParts] = useState([]);
  const [query, setQuery] = useState('');
  const [selectValue, setSelectValue] = useState('');
  let filteredArray;

  useEffect(() => {
    fetch('http://localhost:8081/store/parts')
      .then(response => response.json())
      .then(result => {
        const list = result.map(item => {
          return item;
        })
        setParts(list);
      })
      return () => console.log('App component unmount')
  },[]);

  Parts.map(item => {
    item.id = id;
    id += 1;
    return item;
  });

  filteredArray = Parts;

  function orderByPrice() {
    filteredArray = filteredArray.sort((a,b) => {
      if(arrangeDir === 'asc') {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      else if (arrangeDir === 'des') {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return 0;
    }).filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) ||
        item.price.toLowerCase().includes(query.toLowerCase())
      );
    })
  }

  orderByPrice();

  function search(query) {
    setQuery(query);
  }

  function dir() {
    if(arrangeDir === 'asc') {
      setArrangeDir('des');
    } else 
    {
      setArrangeDir('asc');
    }
  }


  function setValue(value) {
    setSelectValue(value);
  }


  return (
    <Router>
      <main className="container mt-5">
        <Route path="/" exact>
          <Search dir = {dir} search = {search} setValue = {setValue} />
          <ListParts partsList = {filteredArray} />
        </Route>
        <Route path="/parts">
          <Part selectValue={selectValue} />
        </Route>
      </main>
    </Router>
  );
}

export default App;
