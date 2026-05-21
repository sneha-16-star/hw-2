const nums = [6, 1, 8, 3, 10, 4, 7, 2, 9, 5];

const factor = 3;

const result = {
  original: nums,
  mapped: nums.map(n => n * factor),
  ascending: nums.map(n => n * factor).toSorted((a, b) => a - b),
  descending: nums.map(n => n * factor).toSorted((a, b) => b - a),
};

console.table(result);