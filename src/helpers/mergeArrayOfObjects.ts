export function mergeArrayOfObjects(arr: object[]): object {
  return arr.reduce((mergedObj, currentObj) => {
    return { ...mergedObj, ...currentObj }
  }, {})
}
