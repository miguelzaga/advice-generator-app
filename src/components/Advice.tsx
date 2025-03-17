interface Slip {
  id: number;
  advice: string;
}

export default function Advice({ id, advice }: Slip) {
  return (
    <>
      <h1 className="text-heading-sm md:text-heading-md font-black text-green-300">
        ADVICE #{id}
      </h1>
      <p className="text-quote-sm md:text-quote-md mt-6 font-black text-blue-200">
        "{advice}"
      </p>
    </>
  );
}
