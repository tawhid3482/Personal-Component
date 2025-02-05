import ComponentPreview from "../../ComponentPreview/ComponentPreview";

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
`;
const NormalCard = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Card Components</h2>

      <ComponentPreview
        title="Normal Card"
        component={
          <div className="w-80 rounded-2xl overflow-hidden shadow-lg bg-white">
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
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default NormalCard;
