import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="mx-4 order-last">
        <Image src="/next.svg" width={100} height={100} alt="Next Logo" />
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-5xl font-bold text-blue-700">Welcome to NextJs</h1>
        <h2 className="text-3xl font-semibold text-blue-300">
          A framework for building web applications using React, a JavaScript
          library
        </h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900 ">
          Learn More
        </button>
      </div>
    </div>
  );
}
