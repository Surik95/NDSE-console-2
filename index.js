#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const startGame = () => {
  const number = Math.round(Math.random() * 100);
  rl.question('Загадано число от 0 до 100 \n', (data) => {
    if (Number(data) === number) {
      console.log(`Отгадано число ${number}`);
      rl.close();
    } else if (data !== number) {
      iteratingValues(number, data);
    }
  });
};

const iteratingValues = (number, iterator) => {
  if (number === iterator) {
    console.log(`Отгадано число ${number}`);
    rl.close();
  } else if (number > iterator) {
    rl.question('Больше! \n', (input) => {
      iteratingValues(number, Number(input));
    });
  } else if (number < iterator) {
    rl.question('Меньше! \n', (input) => {
      iteratingValues(number, Number(input));
    });
  } else {
    rl.question('Введите число! \n', (input) => {
      iteratingValues(number, Number(input));
    });
  }
};

startGame();
