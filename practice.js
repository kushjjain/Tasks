const sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
    console.log('\nWords arranged by occurrences in descending order:');
    sortedWordCounts.forEach(([word, count]) => {
      console.log(`${word}: ${count}`);
    });

    const mostRepeatedWord = sortedWordCounts[0][0];
    const leastRepeatedWord = sortedWordCounts[sortedWordCounts.length - 1][0];

    console.log('\nMost repeated word:', mostRepeatedWord);
    console.log('Least repeated word:', leastRepeatedWord);