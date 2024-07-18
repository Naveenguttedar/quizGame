export const checkStrEqual = (str1: string, str2: string) => str1 === str2;
export const getCorrectElement = (optionId: number) => {
  const element = document.getElementById(`option-${optionId}`);
  return element;
};
