import readlineSync from 'readline-sync';

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

const evenGame = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no"';
  const userName = greeting(text);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    const rigthAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num} `);
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

export { greeting, evenGame };
