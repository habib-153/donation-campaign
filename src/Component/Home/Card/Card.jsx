/* eslint-disable react/prop-types */

const Card = ({ card }) => {
  const { picture, title, color_card_bg, category, color_text_button } = card;
  return (
    <div
      style={{ background: color_card_bg, color: color_text_button }}
      className="rounded-lg"
    >
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
  );
};

export default Card;
