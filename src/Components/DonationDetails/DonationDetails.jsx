import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./DonationDetails.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";


const DonationDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const category = categories.find((category) => category.id === idInt);
  //    const{picture, title, description,price} =category;

  const handleDonate = () => {
    saveDonation(idInt);
    toast('Donate Successfully');
  }



  return (
    <div className="mt-8">
      <div className="w-full rounded-lg">
        <div className="jony">
          <img className="w-full mt-16" src={category.picture} alt="" />
          <div className="w-full text-white overlay-content rounded">
            <button onClick={handleDonate}
              style={{ backgroundColor: category.text_color }}
              className="btn border-none text-white overlay-content-btn"
            >
              Donate {category.price}
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-3xl  mb-3">{category.title}</h3>
      <p className="mb-12">{category.description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
