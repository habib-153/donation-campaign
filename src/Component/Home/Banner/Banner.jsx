import '../Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="text-center back">
        <div className='bg-[#ffffffc9] py-36'>
          <h1 className="text-[#0B0B0B] text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
        <input
          className="p-3 lg:w-[350px] mt-10 border rounded-l-lg"
          type="search" name="" id=""
          placeholder="Search here..."
        />
        <button className="rounded-r-lg p-3 px-5 -ml-[3px] bg-[#FF444A]">
          Search
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
