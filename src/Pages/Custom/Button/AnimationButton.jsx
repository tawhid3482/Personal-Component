import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
<button className="relative px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#FF7F50] text-white font-semibold rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group">
  <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  <span className="relative">Hover Me</span>
</button>

`;

const buttonHTML = `
<button class="relative px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#FF7F50] text-white font-semibold rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group">
  <span class="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  <span class="relative">Hover Me</span>
</button>

`;

const AnimationButton = () => {
  return (
    <div className="p-8 space-y-6">
      <ComponentPreview
        title="Animation Button"
        component={
          <button className="relative px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#FF7F50] text-white font-semibold rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group">
            <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative">Hover Me</span>
          </button>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default AnimationButton;
