/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {id, picture, title, color_card_bg, category, color_text_button } = card;
  return (
    <Link to={`/card/${id}`}>
    <div
      style={{ background: color_card_bg, color: color_text_button }}
      className="rounded-lg">
      <div className="">
        <figure>
          <img src={picture} />
        </figure>
        <div className="px-2 py-5">
          <h2
            className="w-20 rounded-md  text-center"
            style={{ background: color_card_bg, color: color_text_button }}
          >
            {category}
          </h2>
          <h2 className="font-semibold mt-5 text-xl">{title}</h2>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Card;
