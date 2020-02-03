// @see https://en.wikipedia.org/wiki/Magic_8-Ball
const affirmative = [
  'It is certain.',
  'It is dicededly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see, it yes',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.'
];
const nonCommittal = [
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.'
];
const negative = [
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook is not so good.',
  'Very doubtful'
];

const answers = [affirmative, nonCommittal, negative];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function predict() {
  const a = Math.floor(getRandomArbitrary(0, 3));
  const b = (a === 0) ? Math.floor(getRandomArbitrary(0, 10)) : Math.floor(getRandomArbitrary(0, 5));
  const response = answers[a][b];
  console.log('Response:', response);  
}

predict();
