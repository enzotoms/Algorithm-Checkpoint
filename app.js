function analyzeSentence(sentence) {
    // Initialize variables
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false; // Flag to track if currently processing a word
  
    // Loop through each character
    for (let char of sentence) {
      sentenceLength++;
  
      // Check if character is a separator (space or punctuation)
      if (char === " " || char === ".") {
        if (inWord) { // End of a word
          wordCount++;
          inWord = false;
        }
      } else {
        // Check if character is a vowel (case-insensitive)
        if (/[aeiouAEIOU]/.test(char)) {
          vowelCount++;
        }
        inWord = true; // Start of a new word
      }
    }
  
    // Handle the last word if the sentence doesn't end with a space
    if (inWord) {
      wordCount++;
    }
  
    // Return the results
    return {
      length: sentenceLength,
      words: wordCount,
      vowels: vowelCount
    };
  }
  
  // Example usage
  const sentence = "This is a test sentence.";
  const results = analyzeSentence(sentence);
  
  console.log("Sentence length:", results.length);
  console.log("Word count:", results.words);
  console.log("Vowel count:", results.vowels);
  