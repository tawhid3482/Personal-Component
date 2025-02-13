import {
  FaShoppingBasket,
  FaEye,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import ComponentPreview from "../../ComponentPreview/ComponentPreview";
import { FaLocationPin } from "react-icons/fa6";

const buttonHTML = `
Sorry
`;

const buttonJSX = `
import {FaShoppingBasket,FaEye,FaRegHeart,FaStar,FaStarHalfAlt,} from "react-icons/fa";

 <div className="bg-gray-900 text-white rounded-xl overflow-hidden w-72 shadow-lg border border-gray-800 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/157568993/photo/three-bell-peppers-a-red-a-yellow-and-an-orange-one.jpg?s=612x612&w=0&k=20&c=uj3OgcABQonRxBw0b_r1DBtjbVk7c5VP-8HmXja2LFU="
                alt="Bell Pepper"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-xs font-bold px-2 py-1 rounded-md">
                Sale
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Bell Pepper</h3>
              <div className="flex items-center space-x-2 my-2">
                <span className="text-gray-400 line-through">$2.00</span>
                <span className="text-green-400 font-bold">$1.50</span>
              </div>
              <p className="text-green-500 font-semibold">In Stock</p>
              <div className="flex items-center mt-2 text-green-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4 text-gray-400">
                  <FaRegHeart className="cursor-pointer hover:text-white transition-colors duration-200" />
                  <FaEye className="cursor-pointer hover:text-white transition-colors duration-200" />
                </div>
                <button className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition duration-200 shadow-lg">
                  <FaShoppingBasket />
                </button>
              </div>
            </div>
          </div>

taj mahel
<div className="bg-white md:w-80 md:h-96 my-5 dark:bg-slate-300 dark:text-black shadow-xl rounded-lg overflow-hidden border border-gray-200">
                <figure className="overflow-hidden">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg"
                    alt="img"
                    className="transition-transform duration-300 ease-in-out h-56 w-full object-cover hover:scale-110"
                  />
                </figure>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaLocationPin className="text-[#08B3AB]" />
                      <p className="text-lg font-medium">India</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaStar className="text-[#be9342]" />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold my-4">Taj Mahal</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#08B3AB] dark:text-black font-medium">
                      $30 / per person
                    </p>
                    <button className="px-4 py-1 rounded-lg bg-[#08B3AB] hover:bg-blue-400 text-white font-semibold transition-all">
                      Details
                    </button>
                  </div>
                </div>
              </div>
`;

const HoverCard
 = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Card Components</h2>

      <ComponentPreview
        title="Hover Card"
        component={
          <div className="md:flex  gap-8 items-center">
            <div className="bg-gray-900 text-white rounded-xl overflow-hidden md:w-72 shadow-lg border border-gray-800 transition transform hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://media.istockphoto.com/id/157568993/photo/three-bell-peppers-a-red-a-yellow-and-an-orange-one.jpg?s=612x612&w=0&k=20&c=uj3OgcABQonRxBw0b_r1DBtjbVk7c5VP-8HmXja2LFU="
                  alt="Bell Pepper"
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-xs font-bold px-2 py-1 rounded-md">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Bell Pepper</h3>
                <div className="flex items-center space-x-2 my-2">
                  <span className="text-gray-400 line-through">$2.00</span>
                  <span className="text-green-400 font-bold">$1.50</span>
                </div>
                <p className="text-green-500 font-semibold">In Stock</p>
                <div className="flex items-center mt-2 text-green-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4 text-gray-400">
                    <FaRegHeart className="cursor-pointer hover:text-white transition-colors duration-200" />
                    <FaEye className="cursor-pointer hover:text-white transition-colors duration-200" />
                  </div>
                  <button className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition duration-200 shadow-lg">
                    <FaShoppingBasket />
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-white md:w-80 md:h-96 my-5 dark:bg-slate-300 dark:text-black shadow-xl rounded-lg overflow-hidden border border-gray-200">
                <figure className="overflow-hidden">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg"
                    alt="img"
                    className="transition-transform duration-300 ease-in-out h-56 w-full object-cover hover:scale-110"
                  />
                </figure>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaLocationPin className="text-[#08B3AB]" />
                      <p className="text-lg font-medium">India</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaStar className="text-[#be9342]" />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold my-4">Taj Mahal</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#08B3AB] dark:text-black font-medium">
                      $30 / per person
                    </p>
                    <button className="px-4 py-1 rounded-lg bg-[#08B3AB] hover:bg-blue-400 text-white font-semibold transition-all">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default HoverCard
;
