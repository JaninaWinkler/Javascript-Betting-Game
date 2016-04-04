function customRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (var i=0; i<1000; i++) {
  var idx = customRandom(0, 10);
  counts[idx]++;
}

// console.log(counts);

