const isUniqueName = (arr, name) => {
  for (let i = 0; i < arr.length; i++) {
    if (name.toUpperCase() === arr[i].name.toUpperCase()) {
      return false;
    }
  }
  return true;
};

const isCorrectName = name => {
  let isCorrect = true;
  if (name.indexOf("/") > -1) {
    isCorrect = false;
  }
  if (name.indexOf("?") > -1) {
    isCorrect = false;
  }
  if (name.indexOf("%") > -1) {
    isCorrect = false;
  }
  return isCorrect;
};

export default function useIsCorrectBoardName(arr, input) {
  if (isUniqueName(arr, input) && isCorrectName(input)) {
    return true;
  } else {
    return false;
  }
}
