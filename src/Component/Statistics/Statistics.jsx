
import Chart from "./Chart";

const Statistics = () => {

    // const [donatedCards, setDonatedCards] = useState([]);
  
    // useEffect(() => {
    //    const storedCardIds = getStoredCard();
    //   if (cards.length > 0) {
    //     const donated = [];
    //     for (const id of storedCardIds) {
    //       const card = cards.find((card) => card.id === id);
    //       if (card) {
    //         donated.push(card);
    //       }
    //       setDonatedCards(donated);
    //       console.log(cards, storedCardIds, donated, donatedCards.length);
    //     }
    //   }
    // console.log(storedCardIds);
    // }, []);
    return (
        <div>
            <Chart ></Chart>
        </div>
    );
};

export default Statistics;