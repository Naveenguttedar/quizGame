export interface dataType {
  id?: number;
  question: string;
  options: string[];
  correctAns: { id: number; value: string };
}
export interface wrongAnsDataType extends dataType {
  wrongAns: string;
}
export const data: dataType[] = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAns: { id: 1, value: "Mars" },
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    correctAns: { id: 0, value: "William Shakespeare" },
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAns: { id: 3, value: "Pacific Ocean" },
  },
  {
    question: "What is the freezing point of water?",
    options: [
      "0 degrees Celsius",
      "32 degrees Fahrenheit",
      "Both A and B",
      "None of the above",
    ],
    correctAns: { id: 2, value: "Both A and B" },
  },
  {
    question: "Which element is said to keep bones strong?",
    options: ["Iron", "Calcium", "Magnesium", "Potassium"],
    correctAns: { id: 1, value: "Calcium" },
  },
];
export const shuffleArray = (arr: dataType[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.map((item, index) => ({ ...item, id: index + 1 }));
};
