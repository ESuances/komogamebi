import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-950 text-white">
      <div className="flex items-center">
        <Image
          src="/komogamebi.png"
          alt="Komogamebi logo"
          width={200}
          height={200}
          className="mr-3"
        />
      </div>
    </header>
  );
}
