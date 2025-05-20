export default function FinishScreen({
  score,
  totalPoints,
  highscore,
  dispatch,
}) {
  const percentage = (score / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {totalPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
