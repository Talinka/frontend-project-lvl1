import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = (text) => {
  console.log('Welcome to the Brain Games!');
  if (text) {
    console.log(text);
  }
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameEngine = (description, getGamePair) => {
  const userName = greeting(description);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const gamePair = getGamePair();
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

export { greeting, gameEngine };
