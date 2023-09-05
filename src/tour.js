import Typewriter from 'typewriter-effect/dist/core';

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const USERS_INFO = [
  'Natalia Rodríguez',
  'Luis Osorio',
  'Jhan Lopez',
  'Javier Rodríguez',
  'Aldair Luque',
  'Breinner Rueda',
  'Bryan Muñoz'
]

const shuffledUsersInfo = shuffleArray(USERS_INFO);

new Typewriter('#typewriter', {
  strings: shuffledUsersInfo,
  autoStart: true,
  loop: true
});
