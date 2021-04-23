
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
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/store/parts')
      .then(response => response.json())
      .then(result => {
        const list = result.map(item => {
          return item;
        })
        setParts(list);
      })
  },[]);

  let partsArray = Parts.map(item => {
    item.id = id;
    id += 1;
    return item;
  });

  function orderByPrice() {
    partsArray = partsArray.sort((a,b) => {
      if(arrangeDir === 'asc') {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      else if (arrangeDir === 'des') {
        return parseFloat(b.price) - parseFloat(a.price);
      }
    })
    setParts(partsArray);
    if(arrangeDir === 'asc') {
      setArrangeDir('des');
    } else 
    {
      setArrangeDir('asc');
    }
  }

  function search(query) {
    let filteredArray = partsArray.filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
    })
    setParts(filteredArray)
  }

  function setValue(value) {
    setSelectValue(value);
    console.log(value)
  }


  return (
    <Router>
      <main className="container mt-5">
        <Route path="/" exact>
          <Search orderByPrice = {orderByPrice} search = {search} setValue = {setValue} />
          <ListParts partsList = {partsArray} />
        </Route>
        <Route path="/parts">
          <Part selectValue={selectValue} />
        </Route>
      </main>
    </Router>
  );
}

export default App;
