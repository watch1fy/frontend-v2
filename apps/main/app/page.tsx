import { About, Features, Hero } from "@/components/ui/";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl flex-grow flex flex-col px-6 py-12 gap-8 w-full justify-center">
        <About />
        <Features />
      </div>
    </>
  );
}
