import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './game-engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGamePair = () => {
  const question = getRandNum();
  let isPrime = true;

  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      isPrime = false;
      break;
    }
  }
  const answer = isPrime ? 'yes' : 'no';
  return cons(question, answer);
};


const primeGame = () => {
  startGameEngine(description, getGamePair);
};

export default primeGame;
