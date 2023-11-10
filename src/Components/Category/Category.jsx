const Category = ({ category }) => {
  console.log(category);
  const { title, picture,category_name, category_bg, text_color, card_bg} = category;
  return (
    <div>
      <div className="rounded-lg" style={{backgroundColor: card_bg}}>
        <img src={picture} alt="" />
        <button style={{backgroundColor: category_bg, color: text_color}} className="px-5  m-2 py-1 btn">{category_name}</button>
        <h3 style={{color: text_color}} className="px-3 py-1">{title}</h3>
      
      </div>
    </div>
  );
};

export default Category;
