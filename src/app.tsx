import { useRef, useState } from "preact/hooks";
import { twMerge } from "tailwind-merge";
import QuizContainer from "./components/QuizContainer";
import { data } from "./utils/quizData";
import { checkStrEqual, getCorrectElement } from "./utils/helper";
export function App() {
  const [quizQuestionNo, setQuizQuestionNo] = useState<number>(1);
  const score = useRef(0);
  const handleOnclick = async (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    console.log(element.textContent);
    if (
      checkStrEqual(
        data[quizQuestionNo - 1].correctAns.value,
        element.textContent!,
      )
    ) {
      element.className = twMerge(element.className, "bg-green-500 text-white");
      score.current = score.current + 1;
    } else {
      element.className = twMerge(element.className, "bg-red-500 text-white");
      const correctOption = getCorrectElement(
        data[quizQuestionNo - 1].correctAns.id,
      )!;
      correctOption.className = twMerge(
        correctOption.className,
        "bg-green-500 text-white",
      );
      score.current = score.current - 1;
    }
    await new Promise((res, _) => setTimeout(res, 1500));
    if (quizQuestionNo >= data.length) {
      return;
    } else setQuizQuestionNo(quizQuestionNo + 1);
  };
  return (
    <div
      className={
        " w-full h-screen text-black flex  justify-center items-center"
      }
    >
      <QuizContainer
        question={data[quizQuestionNo - 1]}
        handleOnClick={handleOnclick}
        score={score.current}
      />
    </div>
  );
}
