import { cons } from '@hexlet/pairs';
import getRandNum from './utils';
import startGameEngine from './bin/game-engine';


const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getGamePair = () => {
    const question = getRandNum();
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, answer);
  };

  startGameEngine(description, getGamePair);
};

export default evenGame;
