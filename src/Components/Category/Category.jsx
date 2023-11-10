const Category = ({ category }) => {
  console.log(category);
  const { title, picture,category_name,description, price, category_bg } = category;
  return (
    <div>
      <div>
        <img src={picture} alt="" />
        <h2 className="pl-3 py-1">{category_name}</h2>
        <h3>{title}</h3>
        
      </div>
    </div>
  );
};

export default Category;
