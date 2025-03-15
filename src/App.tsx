import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <>
      <div className="absolute inset-0 bg-blue-900 px-4">
        <div className="mx-auto my-[120px] max-w-[540px] bg-blue-700 px-6 pt-10 pb-16 text-center lg:my-[223px]">
          <h1 className="text-green-300">ADVICE #117</h1>
          <p className="text-blue-200">
            “It is easy to sit up and take notice, what's difficult is getting
            up and taking action.”
          </p>
          <img className="mx-auto" src={pattern} alt="" />
          <img className="hidden" src={patternDesktop} alt="" />
          <button className="size-16 bg-green-300">
            <img src={dice} alt="icon of a dice" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
