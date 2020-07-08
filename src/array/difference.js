/*
  difference(arr1, arr2)
  得到当前数组中所有不在arr2中的元素组成的数组(不改变原数组)
  如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]
*/

export function difference(arr1, arr2) {
  const arr = []
  // 处理边界情况
  if (arr1.length === 0) {
    return arr1
  }
  if (arr2.length === 0) {
    return [...arr1]
  }

  arr1.forEach((item) => {
    if (arr2.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
}

export function differences(arr1, ...args) {
  const arr = []

  // 处理边界情况
  if (arr1.length === 0) {
    return arr1
  }
  if (args.length === 0) {
    return [...arr1]
  }

  arr1.forEach((item) => {
    let isUnique = true
    args.forEach((arg) => {
      if (arg.indexOf(item) !== -1) {
        isUnique = false
      }
    })
    if (isUnique) {
      arr.push(item)
    }
  })
  return arr
}
