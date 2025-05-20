import { useEffect } from "react";

export default function Timer({ timeRemaning, dispatch }) {
  const mins = Math.floor(timeRemaning / 60);
  const secs = timeRemaning % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
