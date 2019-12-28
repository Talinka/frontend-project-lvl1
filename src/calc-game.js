import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './bin/game-engine';

const description = 'What is the result of the expression?';
const operations = '+-*';

const getGamePair = () => {
  const op1 = getRandNum();
  const op2 = getRandNum(0, op1);
  const operator = operations[getRandNum(0, operations.length - 1)];
  const question = `${op1} ${operator} ${op2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = `${op1 + op2}`;
      break;
    case '-':
      answer = `${op1 - op2}`;
      break;
    default:
      answer = `${op1 * op2}`;
      break;
  }
  return cons(question, answer);
};

const calcGame = () => {
  startGameEngine(description, getGamePair);
};

export default calcGame;
