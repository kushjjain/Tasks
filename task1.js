const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wordCounts = {};

rl.question('Enter the number of words (n): ', (n) => {
  let count = 0;

  function processWord(word) {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
    count++;
  }

  function printWordCounts() {
    console.log('Number of distinct words: ' + Object.keys(wordCounts).length);

    const sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b - a);
    console.log('\nWords arranged in descending order:');
    sortedWordCounts.forEach(([word, count]) => {
      console.log(`${word}: ${count}`);
    });

    const mostRepeatedWord = sortedWordCounts[0][0];
    const leastRepeatedWord = sortedWordCounts[sortedWordCounts.length - 1][0];

    console.log('\nMost repeated word:', mostRepeatedWord);
    console.log('Least repeated word:', leastRepeatedWord);

    rl.close();
  }

  function readWord() {
    if (count < n) {
      rl.question('Enter a word: ', (word) => {
        processWord(word);
        readWord();
      });
    } else {
      printWordCounts();
    }
  }

  readWord();
});
