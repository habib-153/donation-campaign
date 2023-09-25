import { Outlet } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h2>Hello World</h2>
        {/* <Header></Header> */}
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
