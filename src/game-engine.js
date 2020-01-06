import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const playGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const gamePair = getGameData();
    const question = car(gamePair);
    const rigthAnswer = cdr(gamePair);
    console.log(`Question: ${question} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer !== rigthAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
