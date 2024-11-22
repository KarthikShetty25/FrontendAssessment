export function add(numbers: string): number {
    if (!numbers) return 0; // Return 0 for empty input
  
    // Split by commas and convert to numbers
    const numArray = numbers.split(',').map(num => parseInt(num.trim(), 10));
  
    // Return the sum of the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  