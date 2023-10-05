const Info = () => {
    return (
      <div className="info mt-4 flex flex-col gap-4">
        <ul className="flex flex-wrap justify-between">
          <li>
            Status: <span>Released</span>
          </li>
          <li>
            Release Date: <span>6 October 2006</span>
          </li>
          <li>
            Runtime: <span>2h 31m</span>
          </li>
        </ul>
        <hr />
        <div>
          Director: <span>Martin Scorcese</span>
        </div>
        <hr />
        <div>
          Writer: <span>William Monahan</span>
        </div>
        <hr />
      </div>
    );
  };
  
  export default Info;
  