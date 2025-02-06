import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonHTML = `
<div class="relative w-96 h-60 overflow-hidden rounded-lg shadow-lg">
        <img src="https://source.unsplash.com/600x400/?university,campus" alt="College Life" class="w-full h-full object-cover brightness-75">
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 class="text-2xl font-bold">College Life</h2>
            <p class="text-sm opacity-80">Overall Here</p>
        </div>
    </div>
`;

const buttonJSX = `
<div className="relative w-96 h-60 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_uVlK-wTkbDxivSKLo4NCVKqkeCKplE-mlBUGnwfiI1qG-6FuVR0eSY7cIzAdF3cSKc&usqp=CAU"
                alt="College Life"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold">Personal Ui</h2>
                <p className="text-lg opacity-80">by TIS</p>
              </div>
            </div>

`;
const BgCard = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Card Components</h2>

      <ComponentPreview
        title="Normal Card"
        component={
          <div className="md:flex gap-8 items-center">
            <div className="relative w-96 h-60 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_uVlK-wTkbDxivSKLo4NCVKqkeCKplE-mlBUGnwfiI1qG-6FuVR0eSY7cIzAdF3cSKc&usqp=CAU"
                alt="College Life"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold">Personal Ui</h2>
                <p className="text-lg opacity-80">by TIS</p>
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

export default BgCard;
