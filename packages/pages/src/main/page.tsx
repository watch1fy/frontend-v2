import { About, Features, Hero } from "@watchify/design-system";

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
