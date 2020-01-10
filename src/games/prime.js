import { cons } from '@hexlet/pairs';
import getRandNum from '../utils';
import playGame from '../game-engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};


const primeGame = () => {
  playGame(description, getGameData);
};

export default primeGame;
