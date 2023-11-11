import React from "react";

const CompleteDonation = ({ completeDonation }) => {
  // console.log(completeDonation);
  const { picture, category_name, title, price,  category_bg, text_color, card_bg } = completeDonation;
  return (
    <div>
      <div className="hero bg-base-200">
        <div style={{backgroundColor: card_bg}}  className=" rounded-lg hero-content flex-col gap-7 lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div >
          <button style={{color: text_color}} className="px-5  m-2 py-1 btn">{category_name}</button>
            <h1 className="my-1 text-2xl">{title}</h1>
            <p style={{color: text_color}} className="my-1">{price}</p>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteDonation;
