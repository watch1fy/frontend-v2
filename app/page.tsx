import { About, Features, Hero } from "@/components/ui/";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className=" flex-grow flex flex-col px-24 py-12 gap-8 w-full">
        <About />
        <Features />
      </div>
    </>
  );
}
