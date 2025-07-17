import Image from "next/image";
import Header from "./components/header.js";
import MainSearchBar from "./components/mainsearchbar.js";

export default function Home() {
  return (
    <>
      <Header />
      <MainSearchBar />
    </>
  );
}
