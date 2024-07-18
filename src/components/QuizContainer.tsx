import { twMerge } from "tailwind-merge";
import { dataType } from "../utils/quizData";
export default function QuizContainer({
  question,
  handleOnClick,
  score,
}: {
  question: dataType;
  handleOnClick: (event: MouseEvent) => void;
  score: number;
}) {
  return (
    <div
      className={
        "bg-[#400E32] text-[#fff] rounded-[5px] flex-col justify-center text-center gap-4 border-1 border-black w-[500px] p-5 "
      }
    >
      <h2>Question {question.id} out of 5</h2>
      <h1 className={"p-4 text-xl "}>{question.question}</h1>
      <p className={"text-sm text-end mr-4  "}>
        current score :- <span className={"text-xl"}> {score}/5</span>
      </p>
      <div className={"flex-col gap-4"} onClick={handleOnClick}>
        {question.options.map((option, i) => (
          <div
            key={option}
            id={`option-${i}`}
            className={twMerge(
              "m-4 p-2 rounded-[5px] cursor-pointer bg-white text-black  ",
            )}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
