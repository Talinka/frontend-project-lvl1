import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './game-engine';

const description = 'What number is missing in the progression?';

const progressionMembersCount = 10;
const minStep = 2;
const maxStep = 30;

const getGameData = () => {
  const start = getRandNum();
  const step = getRandNum(minStep, maxStep);
  const hiddenMember = getRandNum(0, progressionMembersCount - 1);
  let question = '';
  for (let i = 0; i < progressionMembersCount; i += 1) {
    const progressionMember = (i === hiddenMember) ? '..' : start + i * step;
    question = `${question} ${progressionMember}`;
  }
  const answer = (start + hiddenMember * step).toString();
  return cons(question.trim(), answer);
};

const progressionGame = () => {
  startGameEngine(description, getGameData);
};

export default progressionGame;
