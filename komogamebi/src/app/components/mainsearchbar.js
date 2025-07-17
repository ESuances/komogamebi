import Image from "next/image";

export default function MainSearchBar() {
  return (
    <div
      className="flex flex-col items-center justify-center p-10"
      style={{
        backgroundImage: "url('/br1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "75vh",
        width: "100%",
      }}
    >
      <div className="mb-4 bg-green-950 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold">Welcome to Komogamebi</h1>
        <p className="mt-2">
          Get the best prices of your favorite games straight to your inbox.
        </p>
        <br />
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter game title"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </form>
        <button className="mt-2 bg-black text-white py-2 px-4 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
}
