function levenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
          console.log(matrix)
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
          } else {
              matrix[i][j] = Math.min(
                  matrix[i - 1][j - 1] + 1,
                  matrix[i][j - 1] + 1,
                  matrix[i - 1][j] + 1
              );
          }
      }
  }

  return matrix[b.length][a.length];
}

function fuzzySearch(searchTerm, items, threshold = 3) {
  searchTerm = searchTerm.toLowerCase();
  return items.filter(item => {
      const itemLower = item.toLowerCase();
      const distance = levenshteinDistance(searchTerm, itemLower);
      return distance <= threshold;
  });
}

// Example usage
const items = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon"
];

const searchTerm = "lemn";
const results = fuzzySearch(searchTerm, items);

console.log(`Search results for "${searchTerm}":`);
console.log(results);