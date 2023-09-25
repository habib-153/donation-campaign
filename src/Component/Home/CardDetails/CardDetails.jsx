import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const IdInt = parseInt(id);
    const card = cards.find(card => card.id === IdInt)
    console.log(card);
    return (
        <div>
            <div>
                <img className="w-full h-[500px] rounded-xl" src={card.picture}alt="" />
                <div className="bg-[#0b0b0bb2] p-5 relative bottom-24 rounded-xl">
                    <button className="px-6 py-3 rounded-xl font-semibold text-[20px]"
                    style={{background:card.color_text_button, color:"white"}}>
                        Donate ${card.price}
                    </button>
                </div>
            </div>
            <h2 className="-mt-10 font-bold text-[#0B0B0B] text-4xl">{card.title}</h2>
            <p className="my-5 text-[16px] text-[rgba(11,11,11,0.7)]">{card.description}</p>
        </div>
    );
};

export default CardDetails;