import Genres from "./Genres";
import Info from "./Info";

const Description = () => {
  return (
    <div className="m-2">
      <h1 className="text-xl">The Departed</h1>
      <Genres />

      <h1>Overview</h1>
      <p className="w-fit">
        An undercover agent and a spy constantly try to counter-attack each
        other in order to save themselves from being exposed in front of the
        authorities. Meanwhile, both try to infiltrate an Irish gang.
      </p>

      <Info />
    </div>
  );
};

export default Description;
