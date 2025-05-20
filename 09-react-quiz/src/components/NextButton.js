export default function NextButton({ dispatch, index, answer }) {
  if (answer === null) {
    return null;
  }
  const isLastQuestion = index === 14;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: isLastQuestion ? "finished" : "nextQuestion" })
      }
    >
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}
