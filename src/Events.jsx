

import React, { useState, useEffect, useContext } from "react";
import Eventcard from './Eventcard.jsx';
import { SearchContext } from "./context/SearchContext";
import './eventcard.css';

function CardList() {
  const { sreach } = useContext(SearchContext);
  const [cardlist, setCardList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/data/")
      .then((response) => response.json())
      .then((data) => {
        setCardList(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filtered = cardlist.filter((card) =>
    card.eve.toLowerCase().includes((sreach || "").toLowerCase())
  );

  if (error) {
    return (<>
    
         <p className='loading'>{ error && <img style={{
                
                 marginTop: '200px',
               marginLeft: '45%',
                 height: '100px',
                 width: '100px'
               }}

 src='src\assets\loading.gif' ></img> }</p>

          
    </>);
  }

  return (
    <>
      {filtered.length > 0 ? (
        filtered.map((card, index) => (
          <Eventcard
            key={index}
            img={card.poster}
            name={card.eve}
            price={card.venue}
            date={card.date}
            contact={card.phone}
            link={card.link}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No matching events found 🥲
        </p>
      )}
    </>
  );
}

export default CardList;
