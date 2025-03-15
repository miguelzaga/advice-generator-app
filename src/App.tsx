import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <>
      <div className="font-main absolute inset-0 bg-blue-900 px-4">
        <div className="relative mx-auto my-[120px] max-w-[540px] rounded-md rounded-sm bg-blue-700 px-6 pt-10 pb-16 text-center lg:my-[223px]">
          <h1 className="text-heading-sm md:text-heading-md font-black text-green-300">
            ADVICE #117
          </h1>
          <p className="text-quote-sm md:text-quote-md font-black text-blue-200">
            “It is easy to sit up and take notice, what's difficult is getting
            up and taking action.”
          </p>
          <div className="mx-auto max-w-fit">
            <img className="md:hidden" src={pattern} alt="" />
            <img className="max-md:hidden" src={patternDesktop} alt="" />
          </div>
          <button className="absolute -bottom-8 left-[calc(50%-2rem)] flex size-16 items-center justify-center rounded-full bg-green-300">
            <img src={dice} alt="icon of a dice" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
