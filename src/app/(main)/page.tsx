import Image from "next/image";
import Hero from "./(sections)/Hero";
import Search from "./(sections)/Search";
import Popular from "./(sections)/Popular";
import About from "./(sections)/About";
import News from "./(sections)/News";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <Search />
      <Popular />
      <About />
      <News />
    </main>
  );
}
