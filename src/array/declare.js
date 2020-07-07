/*
   自定义实现一组数组声明式方法
     1). map()
     2). reduce()
     3). filter()
     4). find()
     5). findIndex()
     6). every()
     7). some()
*/

function map(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const result = callback(element, index)
    arr.push(result)
  }
  return arr
}
function reduce(array, callback, preValue) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    preValue = callback(preValue, element, index)
  }
  return preValue
}
function filter(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const result = callback(element, index)
    if (result) {
      arr.push(element)
    }
  }
  return arr
}

function find(array, callback) {
  let result
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const isFind = callback(element, index)
    if (isFind) {
      result = element
      break
    }
  }
  return result
}

function findIndex(array, callback) {
  let result
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const isFind = callback(element, index)
    if (isFind) {
      result = index
      break
    }
  }
  return result >= 0 ? result : -1
}

function every(array, callback) {
  let result
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    result = callback(element, index)
    if (!result) {
      return false
    }
  }
  return true
}

function some(array, callback) {
  let result
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    result = callback(element, index)
    if (result) {
      return true
    }
  }
  return false
}
export { map, reduce, filter, find, findIndex, every, some }
