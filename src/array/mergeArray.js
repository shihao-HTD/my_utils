/*
mergeArray(arr1, arr2):
将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
如: mergeArray([1,3,5,7,5], [5, 8]) ==> [1, 3, 5, 7, 5, 8]
*/
export function mergeArray(arr1, ...args) {
  const arr = [...arr1]
  args.forEach((arg) => {
    arg.forEach((item) => {
      if (arr.indexOf(item) === -1) {
        arr.push(item)
      }
    })
  })

  return arr
}
