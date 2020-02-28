import React, {useState, useEffect} from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {


  // useEffect can also be used to hold state in local storage 
  // useEffect initialiser function is used to stop json stringify and 
  // localstorage functions to not fire on each render

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const {data, loading} = useFetch(`http://numbersapi.com/${count}`); 
  
  useEffect(()=>{
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{loading ? 'loading ....' : data }</h2>
        <button
          onClick={()=>{setCount(count +1)}}
        >
          New Fact
        </button>
      </header>
    </div>
  );
}

export default App;
