import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-blue-900">
        <div className="bg-blue-700">
          <h1 className="text-green-300">ADVICE #117</h1>
          <p className="text-blue-200">
            “It is easy to sit up and take notice, what's difficult is getting
            up and taking action.”
          </p>
          <img src={pattern} alt="" />
          <img className="hidden" src={patternDesktop} alt="" />
          <button>
            <img src={dice} alt="icon of a dice" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
