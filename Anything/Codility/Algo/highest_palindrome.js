// even case
low = i - 1;
high = i;

// odd case
low = i - 1;
high = i + 1;


while (low >= 0 && high < len && str[low] === str[high]) {
  if (high - low + 1 > end) {
    start = low
    end = high - low + 1
  }

  low--;
  high++;
}
