import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
<div className="bg-gray-900 text-white rounded-lg flex items-center justify-center ">
              <div className="flex flex-col md:flex-row items-center justify-between md:max-w-6xl mx-auto p-8 gap-5">
                <div className="md:max-w-lg">
                  <h1 className="md:text-4xl text-xl font-bold">
                    Build Stunning UI with <br />
                    <span className="text-orange-500">Tailwind CSS</span>
                  </h1>
                  <p className="mt-4 text-gray-300">
                    A modern and customizable UI component library crafted with
                    React and Tailwind CSS. Enhance web development with a
                    seamless, lightweight, and efficient design system.
                  </p>
                  <div className="mt-6 grid md:grid-cols-3 gap-2 space-x-3">
                    <span className="px-2 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                        alt="HTML"
                        className="w-5 h-5"
                      />
                      <span>HTML</span>
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React"
                        className="w-5 h-5"
                      />
                      <span>React</span>
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                        alt="Tailwind"
                        className="w-5 h-5"
                      />
                      <span>Tailwind</span>
                    </span>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="mt-6 md:mt-0">
                  <img
                    src="https://photoshulk.com/wp-content/uploads/cute-anime-dp-for-instagram-girl-1.jpg"
                    alt="Anime Character"
                    className="md:w-80 md:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
`;

const buttonHTML = `
   <div class="bg-gray-900 text-white rounded-lg flex items-center justify-center">
        <div class="flex flex-col md:flex-row items-center justify-between md:max-w-6xl mx-auto p-8 gap-5">
            <div class="md:max-w-lg">
                <h1 class="md:text-4xl text-xl font-bold">
                    Build Stunning UI with <br>
                    <span class="text-orange-500">Tailwind CSS</span>
                </h1>
                <p class="mt-4 text-gray-300">
                    A modern and customizable UI component library crafted with React and Tailwind CSS. 
                    Enhance web development with a seamless, lightweight, and efficient design system.
                </p>
                <div class="mt-6 grid md:grid-cols-3 gap-2 space-x-3">
                    <span class="px-2 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML" class="w-5 h-5">
                        <span>HTML</span>
                    </span>
                    <span class="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" class="w-5 h-5">
                        <span>React</span>
                    </span>
                    <span class="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" class="w-5 h-5">
                        <span>Tailwind</span>
                    </span>
                </div>
                <button class="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-semibold">
                    Get Started
                </button>
            </div>
            <div class="mt-6 md:mt-0">
                <img src="https://photoshulk.com/wp-content/uploads/cute-anime-dp-for-instagram-girl-1.jpg" 
                     alt="Anime Character" class="md:w-80 md:h-80 object-cover rounded-2xl">
            </div>
        </div>
    </div>
`;

const NormalBanner = () => {
  return (
    <div className="p-8 space-y-6">
      <ComponentPreview
        title="Animation Button"
        component={
          <div className="flex gap-5 items-center">
            <div className="bg-gray-900 text-white rounded-lg flex items-center justify-center ">
              <div className="flex flex-col md:flex-row items-center justify-between md:max-w-6xl mx-auto p-8 gap-5">
                <div className="md:max-w-lg">
                  <h1 className="md:text-4xl text-xl font-bold">
                    Build Stunning UI with <br />
                    <span className="text-orange-500">Tailwind CSS</span>
                  </h1>
                  <p className="mt-4 text-gray-300">
                    A modern and customizable UI component library crafted with
                    React and Tailwind CSS. Enhance web development with a
                    seamless, lightweight, and efficient design system.
                  </p>
                  <div className="mt-6 grid md:grid-cols-3 gap-2 space-x-3">
                    <span className="px-2 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                        alt="HTML"
                        className="w-5 h-5"
                      />
                      <span>HTML</span>
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React"
                        className="w-5 h-5"
                      />
                      <span>React</span>
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-md flex items-center space-x-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                        alt="Tailwind"
                        className="w-5 h-5"
                      />
                      <span>Tailwind</span>
                    </span>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-semibold">
                    Get Started
                  </button>
                </div>
                <div className="mt-6 md:mt-0">
                  <img
                    src="https://photoshulk.com/wp-content/uploads/cute-anime-dp-for-instagram-girl-1.jpg"
                    alt="Anime Character"
                    className="md:w-80 md:h-80 object-cover rounded-2xl"
                  />
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

export default NormalBanner;
