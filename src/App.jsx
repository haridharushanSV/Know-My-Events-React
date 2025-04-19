// import './App.css'
// import Navbar from './Navbar.jsx'
// import Eventcard from './Eventcard.jsx'
// import Events from './Events.jsx'
// import React from 'react'
// import { SearchContext } from './Navbar.jsx'
// function App() {
 

//   return (
//     <>
//     <seachprovider>
//     <Navbar/>
//     <Events/>
//     </seachprovider>
//     </>
//   )
// }

// export default App
import './App.css';
import Navbar from './Navbar.jsx';
import Events from './Events.jsx';
import React, { useState } from 'react';
import { SearchContext } from './context/SearchContext'; // 👈 create separate context file

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
