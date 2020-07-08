/*
数组扁平化(flatten)
1. 理解:
  取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
2. 实现:
  方法一: 递归 + reduce() + concat()
  方法二: ... + some() + concat()
*/

export function flatten1(array) {
  return array.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatten1(item) : item)
  }, [])
}
export function flatten2(array) {
  const arr = []
  array.forEach((item) => {
    if (Array.isArray(item)) {
      arr.push(...flatten2(item))
    } else {
      arr.push(item)
    }
  })
  return arr
}

export function flatten3(array) {
  let arr = [].concat(...array)
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
