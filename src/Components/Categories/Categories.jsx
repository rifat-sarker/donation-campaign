import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import DonationDetails from "../DonationDetails/DonationDetails";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category, idx) => (
            <Category key={idx} category={category}>
              <img src={category.picture} alt="" />
            </Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
