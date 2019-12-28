import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './bin/game-engine';

const calcGame = () => {
  const description = '';
  const operations = '+-*';
  const getGamePair = () => {
    const op1 = getRandNum();
    const op2 = getRandNum(0, op1);
    const operator = operations[getRandNum(0, operations.length - 1)];
    const expression = `${op1} ${operator} ${op2}`;
    let rigthAnswer;
    switch (operator) {
      case '+':
        rigthAnswer = `${op1 + op2}`;
        break;
      case '-':
        rigthAnswer = `${op1 - op2}`;
        break;
      default:
        rigthAnswer = `${op1 * op2}`;
        break;
    }
    return cons(expression, rigthAnswer);
  };
  startGameEngine(description, getGamePair);
};

export default calcGame;
