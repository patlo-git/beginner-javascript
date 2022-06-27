// NAMED export
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  // recursion
  // if the buttonText is the same as the one before (don't repeat), return another random item
  if (item === not) {
    console.log('Not again');
    return randomItemFromArray(arr, not);
  }
  return item;
}