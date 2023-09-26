import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="lg:px-[70px] p-2 bg-[#ffffffe8]">
        <div className="">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
      
    </div>
  );
};

export default Root;
