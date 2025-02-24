import Navbar from "../components/Navbar";


export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Welcome to PaySync</h1>
      </main>
    </div>
  );
}