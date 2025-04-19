
import './App.css';
import Navbar from './Navbar.jsx';
import Events from './Events.jsx';
import React, { useState } from 'react';
import { SearchContext } from './context/SearchContext'; 

function App() {
  const [sreach, setSreach] = useState("");

  return (
    <SearchContext.Provider value={{ sreach, setSreach }}>
      <Navbar />
      <Events />
    </SearchContext.Provider>
  );
}

export default App;
