import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './game-engine';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 < num2) {
    return gcd(num2, num1);
  }
  let n1 = num1;
  let n2 = num2;
  while (n1 % n2 !== 0) {
    const rem = n1 % n2;
    n1 = n2;
    n2 = rem;
  }
  return n2;
};

const getGamePair = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  const question = `${num1} ${num2}`;
  const answer = `${gcd(num1, num2)}`;
  return cons(question, answer);
};

const gcdGame = () => {
  startGameEngine(description, getGamePair);
};

export default gcdGame;
