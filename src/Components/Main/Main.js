import React, { useState } from 'react';
import './Main.css';

export default function Main() {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');

  const url = `https://giphy.p.rapidapi.com/v1/gifs/search?api_key=UOGLSxkTAElybRXu73xlZd15DjKMWah4&q=${input}`;

  const tagHandler = (e) => {
    setInput(e.target.value);
  };

  const tagSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f5e919abe7msh55111e9f3cea076p192978jsn4d0a02cb4ae5',
        'X-RapidAPI-Host': 'giphy.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setValue(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container-logo">
          <div className="logo">
            GIPHY
          </div>
        </div>
        <div className="container-text">
          Введите тему GIF, которые вы хотите увидеть (На английском)
        </div>
        <form className="container-form" onSubmit={tagSubmit} action="">
          <input className="container-form-input" onChange={tagHandler} type="text" placeholder="Пример: cat" />
        </form>
      </div>
      <div className="container-gif">
        {value?.map((el) => (
          <img className="gif" key={el.id} src={el.images.original.url} alt="" />
        ))}
      </div>
    </div>
  );
}
