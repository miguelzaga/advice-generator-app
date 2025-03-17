import { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";
import Advice from "./components/Advice";

const API_URL = "https://api.adviceslip.com/advice";

interface Slip {
  id: number;
  advice: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [slip, setSlip] = useState<Slip | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP status: ${response.status}`);
      const result = await response.json();
      setSlip(result.slip);
    } catch (error) {
      setSlip(null);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="font-main absolute inset-0 flex items-center justify-center bg-blue-900 px-4 py-[120px]">
        <div className="relative max-w-[540px] rounded-md rounded-sm bg-blue-700 px-6 pt-10 pb-16 text-center md:px-12 md:pt-12 md:pb-18">
          <div className="text-quote-sm text-blue-200">
            {isLoading ? (
              <p>Loading... </p>
            ) : slip ? (
              <Advice id={slip.id} advice={slip.advice} />
            ) : (
              <p>There was an error. Please try again later.</p>
            )}
          </div>

          <div className="mx-auto mt-6 max-w-fit md:mt-10">
            <img className="md:hidden" src={pattern} alt="" />
            <img className="max-md:hidden" src={patternDesktop} alt="" />
          </div>
          <button
            onClick={() => fetchData()}
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
