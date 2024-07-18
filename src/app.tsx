import { useEffect, useRef, useState } from "preact/hooks";
import { twMerge } from "tailwind-merge";
import QuizContainer from "./components/QuizContainer";
import {
  data,
  dataType,
  shuffleArray,
  wrongAnsDataType,
} from "./utils/quizData";
import { checkStrEqual, getCorrectElement } from "./utils/helper";
import Result from "./components/Result";
export function App() {
  const [quizData, setQuizData] = useState<dataType[]>(data);
  const [quizQuestionNo, setQuizQuestionNo] = useState<number>(1);
  const [showResult, setShowResult] = useState<boolean>(false);
  const score = useRef<number>(0);
  const wrongAnswers = useRef<wrongAnsDataType[]>([]);
  useEffect(() => {
    setQuizData(shuffleArray(data));
  }, []);
  const handleOnclick = async (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    const { correctAns } = quizData[quizQuestionNo - 1];
    if (checkStrEqual(correctAns.value, element.textContent!)) {
      element.className = twMerge(element.className, "bg-green-500 text-white");
      score.current = score.current + 1;
    } else {
      element.className = twMerge(element.className, "bg-red-500 text-white");
      const correctOption = getCorrectElement(correctAns.id)!;
      correctOption.className = twMerge(
        correctOption.className,
        "bg-green-500 text-white",
      );
      wrongAnswers.current.push({
        ...quizData[quizQuestionNo - 1],
        wrongAns: element.textContent!,
      });
    }
    await new Promise((res, _) => setTimeout(res, 1500));
    if (quizQuestionNo >= quizData.length) {
      setShowResult(true);
      return;
    } else setQuizQuestionNo(quizQuestionNo + 1);
  };

  const resetHandler = () => {
    score.current = 0;
    wrongAnswers.current = [];
    setShowResult(false);
    setQuizQuestionNo(1);
    setQuizData(shuffleArray(quizData));
  };
  return (
    <div
      className={
        "sm:w-full mx-4 h-screen text-black flex  justify-center items-center"
      }
    >
      {!showResult ? (
        <QuizContainer
          question={quizData[quizQuestionNo - 1]}
          handleOnClick={handleOnclick}
          score={score.current}
        />
      ) : (
        <Result
          wrongAnswers={wrongAnswers.current}
          score={score.current}
          resetHandler={resetHandler}
        />
      )}
    </div>
  );
}
