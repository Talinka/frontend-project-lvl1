import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './bin/game-engine';

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getGamePair = () => {
    const question = getRandNum();
    let answer = true;

    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        answer = false;
        break;
      }
    }
    return cons(question, answer ? 'yes' : 'no');
  };

  startGameEngine(description, getGamePair);
};

export default primeGame;
