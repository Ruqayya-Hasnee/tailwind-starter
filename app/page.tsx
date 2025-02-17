import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Image src="/next.svg" width={100} height={100} alt="Next Logo" />
      </div>
      <div>
        <h1>Welcome to NorthBy</h1>
        <h2>A premium in sight and sound</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}
