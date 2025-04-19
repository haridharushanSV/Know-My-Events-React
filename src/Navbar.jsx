
import './Navbar.css';
import img from './assets/image.png';
import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";

function Navbar() {
  const { setSreach } = useContext(SearchContext);

  function search(event) {
    const query = event.target.value;
    setSreach(query); 
  }

  return (
    <nav>
      <img src={img} alt="logo" />
      <div className='navbara'>
        <input
          id='inpval'
          type="text"
          placeholder='⌕ Search events...'
          onChange={search}
        />
      </div>
    </nav>
  );
}

export default Navbar;
