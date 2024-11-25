export function add(numbers: string): number {
  if (!numbers) return 0;

  // Split by commas or newlines
  const numArray = numbers
      .split(/[\n,]/) 
      .map(num => parseInt(num.trim(), 10));

  return numArray.reduce((sum, num) => sum + num, 0);
}
