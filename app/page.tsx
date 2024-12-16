import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">STUDIOBLOOM.</h1>
        <p className="text-xl mb-8">snart nära dig</p>
        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition duration-300">
          DEV
        </button>
      </div>
    </div>
  );
}
