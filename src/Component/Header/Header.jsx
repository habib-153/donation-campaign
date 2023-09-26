import { NavLink } from "react-router-dom";
import img from "../../img/Logo.png"
const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"
        className={({ isActive, isPending }) =>
        isActive
          ? "text-[#FF444A] underline font-bold"
          : isPending
          ? "pending"
          : ""
      }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation"
        className={({ isActive, isPending }) =>
        isActive
          ? "text-[#FF444A] underline font-bold"
          : isPending
          ? "pending"
          : ""
      }
        >Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics"
        className={({ isActive, isPending }) =>
        isActive
          ? "text-[#FF444A] underline font-bold"
          : isPending
          ? "pending"
          : ""
      }
        >Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-0 flex justify-between">
      <div className="navbar-start flex gap-20 md:gap-0">
        <div className="dropdown">
          <label tabIndex={0} className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
          <img className="w-[150px]" src={img} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-10 menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Header;
