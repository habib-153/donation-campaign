/* eslint-disable react/prop-types */

import '../Banner.css'


const Banner = ({handleSearchBtn}) => {

  // const [cards, setCards] = useState([]);
  // const [displayCards, setDisplayCards] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCards(data));
  // }, []);
  // const handleSearchBtn = () =>{
  //   const searchValue = document.getElementById('search').value;
  //   console.log(searchValue)
  //   //console.log(cards)
  //   if(searchValue === "Education"){
  //     const educationCard = cards.filter(card => card.category === 'Education')
  //     setDisplayCards(educationCard);
  //     console.log(displayCards);
  //   }
  //   else if(searchValue === "Food"){
  //     const foodCard = cards.filter(card => card.category === 'Food')
  //     setDisplayCards(foodCard);
  //     console.log(displayCards);
  //   }
  //   else if(searchValue === "Health"){
  //     const healthCard = cards.filter(card => card.category === 'Health')
  //     setDisplayCards(healthCard);
  //     console.log(displayCards);
  //   }
  //   else if(searchValue === "Clothing"){
  //     const clothCard = cards.filter(card => card.category === 'Clothing')
  //     setDisplayCards(clothCard);
  //     console.log(displayCards);
  //   }
  //   else{
  //     <div>
  //     <div className="grid gap-6 my-16   lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
  //       {cards.map((card) => (
  //         <Card key={card.id} card={card}></Card>
  //       ))}
  //     </div>
  //   </div>
  //   }
  // }
  return (
    <div>
      <div className="text-center back">
        <div className='bg-[#ffffffc9] py-36'>
          <h1 className="text-[#0B0B0B] text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
        <input
          className="p-3 lg:w-[350px] mt-10 border rounded-l-lg"
          type="search" name="" id="search"
          placeholder="Search here..."
        />
        <button onClick={handleSearchBtn}  className="rounded-r-lg p-3 px-5 -ml-[3px] bg-[#FF444A]">
          Search
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
