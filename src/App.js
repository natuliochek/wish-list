import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [item, setItem] = useState(data);
  const removeItem = (id) => {
    console.log(id)
    let newItemList = item.filter(item => item.id !== id);
    console.log(newItemList)
    setItem(newItemList)
  }

  return (
    <div>
      <div className='container'>
        <h1>List of { item.length } MayBeToBuy</h1>
      </div>

      {item.map((item => {
        const {id, name, image, price} = item;

        return(
      <div>
        <div className='container'>
          <img src={ image } width="200px" alt="item"/>
        </div>
        <div className='container'>
          <h2>{ name }</h2>
        </div>
        <div className='container'>
          <p>{ price }</p>
        </div>
        <div className='container'>
          <button className='btn' onClick={()=> removeItem(id)}>Remove</button>
        </div>
      </div>)
      }))}

      <div className='container'>
          <button className='btn all' onClick={()=> setItem([])}>remove all</button>
        </div>

    </div>
  );
}

export default App;
