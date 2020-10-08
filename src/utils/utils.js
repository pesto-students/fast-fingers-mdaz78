const getDifficultyFactor = (level) => {
  switch (level) {
    case "Easy":
      return 1;
    case "Medium":
      return 1.5;
    case "Hard":
      return 2;
    default:
      return NaN;
  }
};

const getLevel = (difficultyFactor) => {
  if (difficultyFactor < 1.5) {
    return "Easy";
  } else if (difficultyFactor >= 1.5 && difficultyFactor < 2) {
    return "Medium";
  } else {
    return "Hard";
  }
};

const getTimerValue = (wordLength, difficultyFactor) => {
  return Math.ceil(wordLength / difficultyFactor);
};

export { getDifficultyFactor, getTimerValue, getLevel };
