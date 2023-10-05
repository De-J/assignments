const Genres = () => {
    const list = ["genre1", "genre2", "genre3"];
  
    return (
      <ul className="flex flex-wrap text-xs my-2">
        {list.map((ele) => (
          <li className="mx-1 px-1 py-0.5 border border-black rounded-md">
            {ele}
          </li>
        ))}
      </ul>
    );
  };
  
  export default Genres;
  