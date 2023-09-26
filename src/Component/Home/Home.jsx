/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Banner.css";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Card from "./Card/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleSearchBtn = () => {
    const searchValue = document.getElementById("search").value;
    console.log(searchValue);
    //console.log(cards)
    if (searchValue === "Education") {
      const educationCard = cards.filter(
        (card) => card.category === "Education"
      );
      setDisplayCards(educationCard);
      console.log(displayCards);
      
    } else if (searchValue === "Food") {
      const foodCard = cards.filter((card) => card.category === "Food");
      setDisplayCards(foodCard);
      console.log(displayCards);
    } else if (searchValue === "Health") {
      const healthCard = cards.filter((card) => card.category === "Health");
      setDisplayCards(healthCard);
      console.log(displayCards);
    } else if (searchValue === "Clothing") {
      const clothCard = cards.filter((card) => card.category === "Clothing");
      setDisplayCards(clothCard);
      console.log(displayCards);
    }
  };
  return (
    <div>
      <div>
        <Banner handleSearchBtn={handleSearchBtn}></Banner>
      </div>
      <div>
        <div className="grid gap-6 my-8   lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {displayCards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Home;
