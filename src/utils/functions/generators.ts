export function numberGenerateCycler(arr: number[]): () => number {
  let ix = 0;

  function next(): number {
    const element = arr[ix]; //ix = 0
    ix = (ix + 1) % arr.length;
    return element;
  }
  return next;
}

export function stringGenerateCycler(arr: string[]): () => string {
  let ix = 0;

  function next(): string {
    const element = arr[ix]; //ix = 0
    ix = (ix + 1) % arr.length;
    return element;
  }
  return next;
}
