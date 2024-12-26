import {  useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuery } from "../redux/actions/queryActions";
import { AppDispatch } from "../redux/store";
const Search = () => {
  const [query, setQuery] = useState<string>(" ")
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = () => {
    if (query.trim()) { 
      dispatch(getQuery(query));  
      navigate("/query");      
    }
  }

  const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
    setQuery(String(e.target.value))
 
  }

  return (

    <div className="flex items-center text-yellow-500 border border-gray-600 bg-[rgb(41,41,41)] rounded-md  ">
      <span 
      onClick={handleClick}
      className="px-4 py-2 bg-[rgb(41,41,41) h-full  border-r border-gray-600 rounded-l-md cursor-pointer">
        <FaSearch />
      </span>
      <input
        value={query}
        onChange={(e) => HandleChange(e)}
        
        className="px-2 w-full rounded-e-md outline-none  bg-[rgb(41,41,41)] " type="text" />
    </div>
  )
}

export default Search