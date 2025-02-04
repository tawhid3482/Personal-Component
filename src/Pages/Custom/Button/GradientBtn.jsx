import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
<button className="px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#3e3801] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300">
  Click Me
</button>
`;

const buttonHTML = `
<button class="px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#3e3801] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300">
  Click Me
</button>
`;

const GradientBtn = () => {
  return (
    <div className="p-8 space-y-6">
      <ComponentPreview
        title="Button gradient design"
        component={
          <button className="px-6 py-3 bg-gradient-to-r from-[#F0592A] to-[#3e3801] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300">
            Click Me
          </button>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default GradientBtn;
