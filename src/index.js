import { cons } from '@hexlet/pairs';
import { gameEngine } from './bin/game-engine';

const getRandNum = (max = 100) => Math.round(Math.random() * max);

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getGamePair = () => {
    const question = getRandNum();
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, answer);
  };

  gameEngine(description, getGamePair);
};

const calcGame = () => {
  const description = '';
  const operations = '+-*';
  const getGamePair = () => {
    const op1 = getRandNum();
    const op2 = getRandNum(op1);
    const operator = operations[getRandNum(2)];
    const expression = `${op1} ${operator} ${op2}`;
    let rigthAnswer;
    switch (operator) {
      case '+':
        rigthAnswer = op1 + op2;
        break;
      case '-':
        rigthAnswer = op1 - op2;
        break;
      default:
        rigthAnswer = op1 * op2;
        break;
    }
    return cons(expression, rigthAnswer);
  };
  gameEngine(description, getGamePair);
};

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

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGamePair = () => {
    const num1 = getRandNum();
    const num2 = getRandNum();
    return cons(`${num1} ${num2}`, gcd(num1, num2));
  };

  gameEngine(description, getGamePair);
};

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const getGamePair = (count = 10) => {
    const start = getRandNum();
    const step = getRandNum(30) + 2;
    const hide = getRandNum(count - 1);
    let question = '';
    const answer = start + hide * step;
    for (let i = 0; i < count; i += 1) {
      const num = (i === hide) ? '..' : start + i * step;
      question = `${question} ${num}`;
    }
    return cons(question, answer);
  };

  gameEngine(description, getGamePair);
};

export {
  evenGame, calcGame, gcdGame, progressionGame,
};
