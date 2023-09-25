import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "../Home/Banner.css";
// import Banner from "../Home/Banner/Banner";
// import Home from "../Home/Home";


const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-[70px]  bg-[#ffffffe8]">
        <div className="">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
      
    </div>
  );
};

export default Root;
