import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
  Click Me
</button>`;

const buttonHTML = `
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
  Click Me
</button>`;

const ButtonsPage = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Button Components</h2>
      
      <ComponentPreview
        title="Primary Button"
        component={<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Click Me</button>}
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default ButtonsPage;
