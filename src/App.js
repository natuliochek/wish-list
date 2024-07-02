import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [item, setItem] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeItem = (id) => {

    let newItemList = item.filter(item => item.id !== id);

    setItem(newItemList)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }
  
  return (
    <div>
      <div className='container'>
        <h1>List of { item.length } MayBeToBuy Things</h1>
      </div>

      {item.map((item => {
        const {id, name, image, price, description, showMore} = item;

        return(
      <div>
        <div className='container'>
          <h2>{ name }</h2>
        </div>
        <div className='container'>
          <img src={ image } width="200px" alt="item"/>
        </div>
        <div className='container'>
          <p className='describtion'>{showMore ? description : description.substring(0,50) + "..."}
            <button className='btnShow' onClick={()=> showTextClick(item)} >{ showMore ? "Show less" : "Show more" }</button>
          </p>
        </div>
        <div className='container'>
          <p className='price'>{ price }</p>
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
