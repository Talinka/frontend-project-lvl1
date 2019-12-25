const getRandNum = (max = 100, min = 0) => Math.round(Math.random() * (max - min)) + min;

export default getRandNum;
