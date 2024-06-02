import React, { useState, useEffect } from 'react';

import './App.css'

import Card from './components/Card'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  

  return (
   <>
    <div className="card-container flex flex-wrap justify-center">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.image}
            />
          ))}
        </div>
   </>
  )
}

export default App
