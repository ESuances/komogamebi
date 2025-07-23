import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-950 text-white">
      <div className="flex items-center">
        <Image
          src="/komogamebi.png"
          alt="Komogamebi logo"
          width={150}
          height={150}
          className="mr-3"
        />
      </div>
      <nav className="flex space-x-4">
        <p className="text-lg font-semibold">Made by ESuances :D</p>
      </nav>
    </header>
  );
}
