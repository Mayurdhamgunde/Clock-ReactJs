import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2>
        <p className="tm-txt">
          {" "}
          {time.toLocaleTimeString()}{" "}
        </p>
      </h2>
    </>
  );
};

export default CurrentTime;
