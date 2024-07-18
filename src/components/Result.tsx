import { wrongAnsDataType } from "../utils/quizData";

export default function Result({
  wrongAnswers,
  score,
  resetHandler,
}: {
  wrongAnswers: wrongAnsDataType[];
  score: number;
  resetHandler: (e: MouseEvent) => void;
}) {
  return (
    <div
      className={
        "bg-[#400E32] text-[#fff] rounded-[5px] flex-col justify-center text-center gap-4 border-1 border-black w-[500px] p-5 "
      }
    >
      <h1 className={"text-xl"}>Quiz Completed</h1>
      <p>
        Total Score<span className={"text-lg"}> {score}/5</span>
      </p>
      {wrongAnswers.map((question) => {
        return (
          <div>
            <h1 className={"p-2 text-lg"}>{question.question}</h1>
            <div className={"grid grid-cols-2  gap-2 "}>
              <div
                className={
                  "m-4 p-2 rounded-[5px] cursor-pointer bg-red-500 text-white  "
                }
              >
                {question.wrongAns}
              </div>
              <div
                className={
                  "m-4 p-2 rounded-[5px] cursor-pointer bg-green-500 text-white  "
                }
              >
                {question.correctAns.value}
              </div>
            </div>
          </div>
        );
      })}
      <div
        className={"bg-white p-2 text-xl text-black rounded-sm cursor-pointer"}
        onClick={resetHandler}
      >
        Reset
      </div>
    </div>
  );
}
