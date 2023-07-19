import { useState } from 'react';
import React from 'react';
import data from '../src/data'

const List = ({ people }) => {
  const [wished, setWished] = useState(people);

  const removeWished = (id) => {
    console.log(id);
    const remWished = wished.filter((p) => p.id !== id);
    setWished(remWished);
  };
  const remove_all = ()=>{
    setWished([])
  }
  return (
    <>
      <h3>{wished.length} birthdays today</h3>
      {wished.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='details'>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className='rmv_btn' onClick={() => removeWished(id)}>
                Wished
              </button>
            </div>
          </article>          
        );
      })}
      <button className='main_button' onClick={() => remove_all()}>clear all</button>
    </>
  );
};

export default List;
