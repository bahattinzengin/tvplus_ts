
import { Link, NavLink } from "react-router-dom";
import { buttonConstant } from "../constant/buttonConstant";
import Search from "./Search";
import DropDown from "./DropDown";
import { ButtonConstantType } from "../type/Type";



const Header = () => {
  return (
    <div className=" flex justify-around lg:justify-between items-center my-1 py-2 px-6 border-b border-b-gray-600 w-full  ">

      <figure>
        <Link to="/">
          <img width={60} src="https://tvplus.com.tr/images/iconsVisual/logo.svg" alt="" />
        </Link>
      </figure>

      <div className="hidden lg:flex  justify-between w-[40%] md:w-[50%] mr-2  ">
        {buttonConstant.map((item: ButtonConstantType) => (
          <div key={item.id} className="flex-grow">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 text-yellow-500 rounded-md border-b-2 border-yellow-500"
                  : "px-4 py-2 text-white border-b-2 border-transparent hover:text-yellow-500 hover:border-yellow-500 transition-all duration-500 whitespace-nowrap"
              }
              to={item.path}>
              {item.name}
            </NavLink>
          </div>
        ))}
      </div>


      <div className="w-3/5  lg:w-1/3 px-4">
        <Search />
      </div>


      <div className="  lg:hidden">
        <DropDown />
      </div>



    </div>
  )
}

export default Header