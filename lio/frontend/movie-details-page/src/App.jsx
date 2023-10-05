import Actors from "./components/Actors";
import Description from "./components/Description/Description";
import Poster from "./components/Poster";
import Similar from "./components/Similar";

export default function App() {
  return (
    <div className="App">
      <section className="backdrop flex place-items-center gap-6 my-10 mx-16">
        <Poster />
        <Description />
      </section>
      <Actors />
      <section className="trailer">
        <img
          src="https://coolwallpapers.me/picsup/5831337-departed-wallpapers.jpg"
          className="h-[60vmin] w-[75min] opacity-60"
        />
      </section>
      <Similar />
    </div>
  );
}