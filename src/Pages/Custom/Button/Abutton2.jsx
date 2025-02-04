import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `

<button className="px-6 py-3 text-white font-semibold transition-all duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700
 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300">
     Hover Me
</button>

<button 
  type="button" 
  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 
  hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 
  disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
>
  Button
</button>





`;

const buttonHTML = `
<button class="px-6 py-3 text-white font-semibold transition-all duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300">
    Hover Me
</button>

<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">
  Button
</button>

`;

const Abutton2 = () => {
  return (
    <div className="p-8 space-y-6">
      <ComponentPreview
        title="Animation Button"
        component={
          <div className="flex gap-5 items-center">
            <button className="px-6 py-3 text-white font-semibold transition-all duration-300 ease-in-out transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300">
              Hover Me
            </button>

            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
            >
              Button
            </button>
          </div>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default Abutton2;
