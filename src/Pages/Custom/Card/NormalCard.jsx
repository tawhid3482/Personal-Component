import ComponentPreview from "../../ComponentPreview/ComponentPreview";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const buttonHTML = `
<div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
  <img
    class="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
    src="https://source.unsplash.com/400x300/?nature"
    alt="Card Image"
  />
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="text-gray-600 mt-2">
      This is a simple card with a beautiful design using Tailwind CSS.
    </p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Learn More
    </button>
  </div>
</div>
`;

const buttonJSX = `
<div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
  <img
    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 "
    src="https://source.unsplash.com/400x300/?nature"
    alt="Card Image"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
    <p className="text-gray-600 mt-2">
      This is a simple card with a beautiful design using Tailwind CSS.
    </p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Learn More
    </button>
  </div>
</div>

// Doctor card
<div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 border border-gray-200">
              {/* Image Section */}
              <img
                src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                alt="Doctor"
                className="w-full h-48 object-cover"
              />

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  Karyen Anderson
                </h3>
                <p className="text-gray-600 text-sm">
                  BTP - Senior Physiotherapist
                </p>

                {/* Rating Section */}
                <div className="flex items-center text-yellow-500 my-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>

                {/* Availability */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <p>Available On Mon, 22 December</p>
                </div>

                {/* Price */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaDollarSign className="text-gray-500 mr-2" />
                  <p>15</p>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-all">
                  View Profile
                </button>
              </div>
            </div>

`;
const NormalCard = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Card Components</h2>

      <ComponentPreview
        title="Normal Card"
        component={
          <div className="md:flex gap-8 items-center">
            <div className="md:w-80  rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 "
                src="https://static.vecteezy.com/system/resources/thumbnails/039/545/117/small/ai-generated-beautiful-rose-flowers-with-butterflies-flying-on-them-video.jpg"
                alt="Card Image"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Card Title
                </h2>
                <p className="text-gray-600 mt-2">
                  This is a simple card with a beautiful design using Tailwind
                  CSS.
                </p>
                <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
            {/* doctor */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 border border-gray-200">
              {/* Image Section */}
              <img
                src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                alt="Doctor"
                className="w-full h-48 object-cover"
              />

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  Karyen Anderson
                </h3>
                <p className="text-gray-600 text-sm">
                  BTP - Senior Physiotherapist
                </p>

                {/* Rating Section */}
                <div className="flex items-center text-yellow-500 my-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>

                {/* Availability */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <p>Available On Mon, 22 December</p>
                </div>

                {/* Price */}
                <div className="flex items-center text-gray-700 text-sm my-1">
                  <FaDollarSign className="text-gray-500 mr-2" />
                  <p>15</p>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-all">
                  View Profile
                </button>
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

export default NormalCard;
