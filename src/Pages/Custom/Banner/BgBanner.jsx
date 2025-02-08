import ComponentPreview from "../../ComponentPreview/ComponentPreview";
import { motion } from "framer-motion";

const buttonHTML = ``;
const buttonJSX = `<div className="flex flex-col lg:flex-row justify-between items-center lg:gap-20 px-5 py-10 bg-white lg:h-[500px] overflow-hidden">
                {/* Left Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 text-left"
                >
                  <h2 className="md:text-4xl font-extrabold text-gray-900 leading-tight">
                    Desired <br /> Experiences
                  </h2>
                  <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                    The time is now for it to be okay to be great. For being a
                    bright color. For standing out.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105">
                      CONTACT US
                    </button>
                    <button className="border border-black px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105">
                      READ MORE
                    </button>
                  </div>
                </motion.div>

                {/* Right Section - Image Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:w-1/2 mt-8 lg:mt-0"
                >
                  <div className="grid grid-cols-3 gap-4 lg:relative">
                    {[
                      "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
                      "https://freedesignfile.com/upload/2017/02/Young-and-beautiful-fashion-woman-HD-picture-05.jpg",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-J5hGl2C7VGkpGUFEIbsFgsJFoDPMCFegGJDWJeQHoj-RgB6Bl_ddUqNenTOTKydLWMo&usqp=CAU",
                      "https://e0.pxfuel.com/wallpapers/2/715/desktop-wallpaper-men-and-women-fashion-cool-clothing.jpg",
                      "https://i.pinimg.com/736x/e2/ac/56/e2ac5680abc0fa278d6b2f3747be7de5.jpg",
                      "https://wallpapers.com/images/hd/fashion-dress-pictures-ql8u0w90614vtppb.jpg",
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <img
                          className="rounded-xl w-full h-36 max-w-[144px] md:max-w-[180px] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                          src={src}
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>`;
const BgBanner = () => {
  return (
    <div>
      <div className="p-8 space-y-6">
        <ComponentPreview
          title="Animation "
          component={
            <div className="flex gap-5 items-center">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-20 px-5 py-10 bg-white lg:h-[500px] overflow-hidden">
                {/* Left Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 text-left"
                >
                  <h2 className="md:text-4xl font-extrabold text-gray-900 leading-tight">
                    Desired <br /> Experiences
                  </h2>
                  <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                    The time is now for it to be okay to be great. For being a
                    bright color. For standing out.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105">
                      CONTACT US
                    </button>
                    <button className="border border-black px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105">
                      READ MORE
                    </button>
                  </div>
                </motion.div>

                {/* Right Section - Image Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:w-1/2 mt-8 lg:mt-0"
                >
                  <div className="grid grid-cols-3 gap-4 lg:relative">
                    {[
                      "https://t3.ftcdn.net/jpg/02/50/84/98/360_F_250849890_qxH2MudfMq5AFSqHrOp5oA9NqykT14Ti.jpg",
                      "https://freedesignfile.com/upload/2017/02/Young-and-beautiful-fashion-woman-HD-picture-05.jpg",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-J5hGl2C7VGkpGUFEIbsFgsJFoDPMCFegGJDWJeQHoj-RgB6Bl_ddUqNenTOTKydLWMo&usqp=CAU",
                      "https://e0.pxfuel.com/wallpapers/2/715/desktop-wallpaper-men-and-women-fashion-cool-clothing.jpg",
                      "https://i.pinimg.com/736x/e2/ac/56/e2ac5680abc0fa278d6b2f3747be7de5.jpg",
                      "https://wallpapers.com/images/hd/fashion-dress-pictures-ql8u0w90614vtppb.jpg",
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <img
                          className="rounded-xl w-full h-36 max-w-[144px] md:max-w-[180px] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                          src={src}
                          alt={`Fashion ${index + 1}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          }
          code={buttonJSX}
          htmlCode={buttonHTML}
        />
      </div>
    </div>
  );
};

export default BgBanner;
