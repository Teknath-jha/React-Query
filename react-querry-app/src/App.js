import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
