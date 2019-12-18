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
    return cons(expression, rigthAnswer.toString());
  };
  gameEngine(description, getGamePair);
};

export { evenGame, calcGame };
