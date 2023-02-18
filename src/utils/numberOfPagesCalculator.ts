function numberOfPagesCalculator(words: number): number {
  const pages = words / 250;

  return Math.round(pages * 10) / 10;
}

export default numberOfPagesCalculator;
