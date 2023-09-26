/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  
  return (
    <div>
      <div className="grid gap-6 my-16   lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
