import SearchSurface from "./components/navbar/SearchSurface";

export default function Home() {
  return (
    <>
      <SearchSurface />
      {/* Add other home page content here */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">Welcome to CheckHost</h2>
        <p className="text-gray-400">Your network tools dashboard.</p>
      </section>
    </>
  );
}
