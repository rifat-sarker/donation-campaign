import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div>
                {
                    categories.map((category,idx) => <Category key={idx} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;

