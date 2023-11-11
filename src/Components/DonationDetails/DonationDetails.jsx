import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
   const categories = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id)
   const category = categories.find(category => category.id === idInt)
//    const{picture, title, description,price} =category;
   console.log(category, id);
    return (
        <div>
            <div>
                <img className='w-full' src={category.picture} alt="" />
                <button style={{backgroundColor: category.text_color,}} className="btn text-white">Donate {category.price}</button>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;