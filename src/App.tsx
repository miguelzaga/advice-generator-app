import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";
import handleButtonClick from "./scripts/handleButtonClick";

function App() {
  return (
    <>
      <div className="font-main absolute inset-0 bg-blue-900 px-4">
        <div className="relative mx-auto my-[120px] max-w-[540px] rounded-md rounded-sm bg-blue-700 px-6 pt-10 pb-16 text-center md:px-12 md:pt-12 md:pb-18 lg:my-[223px]">
          <h1 className="text-heading-sm md:text-heading-md font-black text-green-300">
            ADVICE #117
          </h1>
          <p className="text-quote-sm md:text-quote-md mt-6 font-black text-blue-200">
            “It is easy to sit up and take notice, what's difficult is getting
            up and taking action.”
          </p>
          <div className="mx-auto mt-6 max-w-fit md:mt-10">
            <img className="md:hidden" src={pattern} alt="" />
            <img className="max-md:hidden" src={patternDesktop} alt="" />
          </div>
          <button
            onClick={handleButtonClick}
            className="hover:drop-shadow-main absolute -bottom-8 left-[calc(50%-2rem)] flex size-16 items-center justify-center rounded-full bg-green-300 transition-all hover:cursor-pointer active:scale-90 active:transform"
          >
            <img src={dice} alt="icon of a dice" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
