import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
<button className="px-4 py-2 rounded-lg shadow-md ">
  Click Me
</button>`;

const buttonHTML = `
<button class="px-4 py-2  rounded-lg shadow-md ">
  Click Me
</button>`;

const NormalButton
 = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Button Components</h2>
      
      <ComponentPreview
        title="Normal Button"
        component={<button className="px-4 py-2 border rounded-lg ">Click Me</button>}
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default NormalButton
;
