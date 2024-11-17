import { useState, useEffect } from "react";
import cardData from "../cards.js";
import { FaStar } from "react-icons/fa";
import "../Styles/Cards.css";
import { Link } from 'react-router-dom';

const Cards = () => {
  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(cardData);
        const data = await response.json();
        setCards(data);

        setCards(cardData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div key={index} className="inner-card">
          <img src={card.img} alt="" />
          <div className="top">
            <h2>{card.title}</h2>
            <p className="rating">
              <FaStar size={13} style={{ marginRight: "4px" }} />
              {card.rating}
            </p>
          </div>
          <p className="property">{card.distance} kilometers away</p>
          <p className="property">{card.data}</p>
          <p className="price">${card.price} night</p>
          <Link to={`/listings/${card.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
