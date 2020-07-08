/*
  得到数组的部分元素
  1. drop(array, count):
  得到当前数组过滤掉左边count个后剩余元素组成的数组
  说明: 不改变当前数组, count默认是1
  如: drop([1,3,5,7], 2) ===> [5, 7]
  2. dropRight(array, count):
  得到当前数组过滤掉右边count个后剩余元素组成的数组
  说明: 不改变当前数组, count默认是1
  如: dropRight([1,3,5,7], 2) ===> [1, 3]
*/

export function drop(array, count = 1) {
  const arr = []
  // 对count进行界限判定
  if (count > array.length) {
    count = array.length
  }
  for (let i = count; i < array.length; i++) {
    arr.push(array[i])
  }

  return arr
}

export function dropRight(array, count = 1) {
  const arr = []
  // 对count进行界限判定
  if (count > array.length) {
    count = array.length
  }
  for (let i = 0; i < array.length - count; i++) {
    arr.push(array[i])
  }

  return arr
}
