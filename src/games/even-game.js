import { cons } from '@hexlet/pairs';
import getRandNum from '../utils';
import playGame from '../game-engine';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};


const evenGame = () => {
  playGame(description, getGameData);
};

export default evenGame;
