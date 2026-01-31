import AboutCard from "./components/About/AboutCard";
import SearchSurface from "./components/SearchArea/SearchSurface";
export default function Home() {
  return (
    <>
      <SearchSurface />
      {/* Add other home page content here */}
      <section className="mt-3">
        <AboutCard />
      </section>
    </>
  );
}
