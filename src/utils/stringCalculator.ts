export function add(numbers: string): number {
  if (!numbers) return 0;

  // Split by commas or newlines
  const numArray = numbers.split(/[\n,]/).map(num => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) throw new Error(`Invalid number: "${num}"`);
      return parsed;
  });

  return numArray.reduce((sum, num) => sum + num, 0);
}
