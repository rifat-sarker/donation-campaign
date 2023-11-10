import './Banner.css'
const Banner = () => {
  return (
    <div className='banner py-32 my-20'>
      <div className=" mt-24 text-center overlay-content">
        <h1 className="text-4xl font-semibold">
          I Grow By Helping People In Need
        </h1><br />
        <input className="rounded px-3 py-3" type="text" placeholder="Search here" />
        <button className="btn bg-[#FF444A] text-white">Search</button>
      </div>
    </div>
  );
};

export default Banner;
