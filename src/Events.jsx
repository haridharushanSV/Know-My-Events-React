import React, { useState, useEffect, useContext } from "react";
import Eventcard from './Eventcard.jsx';
import { SearchContext } from "./context/SearchContext";
import './eventcard.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardList() {
  const { sreach } = useContext(SearchContext);
  const [cardlist, setCardList] = useState(null);
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

  if (!cardlist && !error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <img
          src="src/assets/loading.gif"
          alt="loading"
          style={{ height: '100px', width: '100px' }}
        />
      </div>
    );
  }

 

  const filtered = cardlist.filter((card) =>
    card.eve.toLowerCase().includes((sreach || "").toLowerCase())
  );

  if (cardlist && filtered.length === 0 && sreach !== "") {
    toast.info("No matching events found! 😔", {
      position: "bottom-center",
      autoClose: 3000,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <>
      {filtered.map((card, index) => (
        <Eventcard
          key={index}
          img={card.poster}
          name={card.eve}
          price={card.venue}
          date={card.date}
          contact={card.phone}
          link={card.link}
        />
      ))}
      <ToastContainer />
    </>
  );
}

export default CardList;
