import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './bin/game-engine';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const progressionMembersCount = 10;
  const minStep = 2;
  const maxStep = 30;
  const getGamePair = () => {
    const start = getRandNum();
    const step = getRandNum(minStep, maxStep);
    const hide = getRandNum(0, progressionMembersCount - 1);
    let question = '';
    const answer = `${start + hide * step}`;
    for (let i = 0; i < progressionMembersCount; i += 1) {
      const num = (i === hide) ? '..' : start + i * step;
      question = `${question} ${num}`;
    }
    return cons(question, answer);
  };

  startGameEngine(description, getGamePair);
};

export default progressionGame;
