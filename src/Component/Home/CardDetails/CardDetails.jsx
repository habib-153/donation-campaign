import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveCard } from '../../Utility/LocalStorage';

const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
    console.log(card);

    const handleToast = () => {
        saveCard(idInt);
        toast("Thanks For Your Donation")
    }
    return (
        <div>
            <div>
                <img className="w-full h-[500px] rounded-xl" src={card.picture}alt="" />
                <div className="bg-[#0b0b0bb2] p-5 relative bottom-24 rounded-xl">
                    <button 
                    onClick={handleToast}
                    className="px-6 py-3 rounded-xl font-semibold text-[20px]"
                    style={{background:card.color_text_button, color:"white"}}>
                        Donate ${card.price}
                    </button>
                </div>
            </div>
            <h2 className="-mt-10 font-bold text-[#0B0B0B] text-4xl">{card.title}</h2>
            <p className="my-5 text-[16px] text-[rgba(11,11,11,0.7)]">{card.description}</p>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;