export type dataType = {
  id: number;
  question: string;
  options: string[];
  correctAns: { id: number; value: string };
};
export const data: dataType[] = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAns: { id: 1, value: "Mars" },
  },
  {
    id: 2,
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Lion", "Horse"],
    correctAns: { id: 1, value: "Giraffe" },
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    question: "Which country is known for the Eiffel Tower?",
    options: ["Italy", "Germany", "France", "Spain"],
    correctAns: { id: 2, value: "France" },
  },
  {
    id: 6,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Avocado", "Lime"],
    correctAns: { id: 2, value: "Avocado" },
  },
  {
    id: 7,
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
    id: 8,
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAns: { id: 1, value: "Portuguese" },
  },
  {
    id: 9,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAns: { id: 1, value: "Blue Whale" },
  },
  {
    id: 10,
    question: "Which element is said to keep bones strong?",
    options: ["Iron", "Calcium", "Magnesium", "Potassium"],
    correctAns: { id: 1, value: "Calcium" },
  },
];
