function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length < 1 && S.length > 100) {
      return -1;
    }
    if (!S.match(/^[a-zA-Z\.\?\s!]+$/g)) {
        return -1;
    }

    let sentences = S.split(/(\?|\.|!)/g)
    sentences = sentences.filter(s => (s!=='.' && s!==''));
    // console.log(sentences);

    let maxWords = 0;

    for (let i = 0; i < sentences.length; i++) {
      console.log(sentences[i].split(' '));
      let sentence = sentences[i].trim().replace(/\s+/, ' ');
      const wordsCount = sentence.split(' ').length;
      maxWords = Math.max(wordsCount, maxWords);
    }

    return maxWords;
}


const maxWords = solution("We test coders. Give us a try?");
console.log(maxWords);
