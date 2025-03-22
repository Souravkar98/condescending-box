import { useState, useEffect } from "react";
export const Box = ({ BOX_DATA }) => {
  const [arr, setArr] = useState([]);
  const [start, setStart] = useState(false);

  const handleClick = (e) => {
    // console.log(e.target.dataset.index);
    setArr([...arr, e.target.dataset.index]);
  };

  useEffect(() => {
    if (arr.length === 7) {
      setStart(true);
    }
  }, [arr.length]);

  useEffect(() => {
    if (start) {
      let timer = setInterval(() => {
        setArr((prevArr) => {
          if (prevArr.length === 0) {
            setStart(false);
            clearInterval(timer);
            return prevArr; // Return unchanged empty array
          }
          return prevArr.slice(0, -1); // Remove the last element without mutating
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup function to prevent memory leaks
    }
  }, [start]);

  console.log(arr);
  return (
    <div className="box-container">
      {BOX_DATA.map((box, i1) => (
        <div className="row">
          {box.map((e, i2) => {
            return e ? (
              <span
                key={`${i1}-${i2}`}
                data-index={`${i1}-${i2}`}
                className={
                  e && arr.includes(`${i1}-${i2}`) ? "green-box" : "white-box"
                }
                onClick={handleClick}
              ></span>
            ) : (
              ""
            );
          })}
        </div>
      ))}
    </div>
  );
};
