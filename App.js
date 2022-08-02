import React, { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState('time');

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);

  }

  setInterval(updateTime, 1000);

  return (
    <div className="app">

    <h1>{cTime}</h1>
      
    </div>
  );
}

export default App;
