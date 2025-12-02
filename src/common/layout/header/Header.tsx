import headerIcon from "../../../../public/assets/headerIcon.avif";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <>
      <div className="flex flex-col w-full space-y-3   h-30">
        <div className="w-full h-15 items-center flex px-7 justify-between  ">
          <div>
            <h1>
              <IoIosSearch className="text-3xl" />
            </h1>
          </div>

          <div>
            <img className="w-23 h-8" src={headerIcon} alt="" />
          </div>
          <div className="flex gap-x-2">
            <h1 className="">
              <CiUser className=" text-3xl" />
            </h1>
            <h1>
              <IoBagOutline className=" text-3xl" />
            </h1>
          </div>
        </div>
        <div className="flex text-xs w-full justify-center gap-x-5">
          <h1>ALL PRODUCTS</h1>
          <h1>T-SHIRTS</h1>
          <h1>SHIRTS</h1>
          <h1>CAPS</h1>
          <h1>BAG</h1>
          <h1>BOTTOMS</h1>
          <h1>COLLECTIBLES</h1>
          <h1>SALE</h1>
        </div>
        <div className="bg-blue-700 h-10 ">
        <h1 className="text-white h-full animate-[marquee_10s_linear_infinite] flex justify-center items-center">dede</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
