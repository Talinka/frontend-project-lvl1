import { cons } from '@hexlet/pairs';
import getRandNum from '../utils';
import playGame from '../game-engine';

const description = 'What number is missing in the progression?';

const progressionLength = 10;
const minStep = 2;
const maxStep = 30;

const getGameData = () => {
  const start = getRandNum();
  const step = getRandNum(minStep, maxStep);
  const hiddenMember = getRandNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const progressionMemberIndex = (i === hiddenMember) ? '..' : start + i * step;
    question = `${question} ${progressionMemberIndex}`;
  }
  const answer = (start + hiddenMember * step).toString();
  return cons(question.trim(), answer);
};

const progressionGame = () => {
  playGame(description, getGameData);
};

export default progressionGame;
