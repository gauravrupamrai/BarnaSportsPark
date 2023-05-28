import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import logo from "../../assets/logo/Logo_Text_SBS.svg";
import { productData } from "../../static/data";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);

    const filteredResults =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <div className={`${styles.section}`}>
        <div className=" 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-20 h-auto" />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
              placeholder="Search Product..."
              value={search}
              onChange={handleSearch}
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchResults && searchResults.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchResults &&
                  searchResults.map((i, index) => {
                    const d = i.name;

                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                        <img
                          src={i.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-[#fff] flex items-center">
                Become a Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
