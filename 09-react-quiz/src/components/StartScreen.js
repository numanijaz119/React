export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React quiz</h2>
      <h3>{numQuestions} questions to test your knowledge of React</h3>
      <button className="btn btn-ui" onClick={()=> dispatch({ type: "start" })}>
        Start quiz
      </button>
    </div>
  );
}