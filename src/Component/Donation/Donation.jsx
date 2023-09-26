import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../Utility/LocalStorage";

const Donation = () => {
  const cards = useLoaderData();

  const [donatedCards, setDonatedCards] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedCardIds = getStoredCard();
    if (cards.length > 0) {
      const donated = [];
      for (const id of storedCardIds) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          donated.push(card);
        }
        setDonatedCards(donated);
        console.log(cards, storedCardIds, donated);
      }
    }
  }, [cards]);
  return (
    <div>
      <div className="grid my-4 gap-4 md:grid-cols-2 grid-cols-1">
        {donatedCards.slice(0, dataLength).map((card) => (
          <div key={card.id}>
            <div
              style={{
                background: card.color_card_bg,
                color: card.color_text_button,
              }}
              className="rounded-lg"
            >
              <div className="flex gap-3">
                <figure className="w-[200px]">
                  <img
                    className="w-full h-full rounded-lg"
                    src={card.picture}
                  />
                </figure>
                <div className="px-2 py-5">
                  <h2
                    className="w-20 rounded-md  text-center"
                    style={{
                      background: card.color_card_bg,
                      color: card.color_text_button,
                    }}
                  >
                    {card.category}
                  </h2>
                  <h2 className="font-semibold mt-3 text-xl text-black">
                    {card.title}
                  </h2>
                  <p className="font-semibold">$ {card.price}.00</p>
                  <button
                    className="px-4 py-2 rounded-lg font-semibold"
                    style={{
                      background: card.color_text_button,
                      color: "white",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={donatedCards.length <= 4 && "hidden"}>
        <div className={dataLength === cards.length && "hidden"}>
          <div className="my-8 flex justify-center">
            <button
              onClick={() => setDataLength(cards.length)}
              className="text-white py-3 rounded-lg px-6 bg-[#009444]"
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
