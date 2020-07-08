/*
  删除数组中部分元素
  1. pull(array, ...values):
      删除原数组中与value相同的元素, 返回所有删除元素的数组
      说明: 原数组发生了改变
      如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
  2. pullAll(array, values):
      功能与pull一致, 只是参数变为数组
      如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]
* */

export function pull(array, ...values) {
  const deleteArr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (values.indexOf(element) !== -1) {
      // 数组中有与values中相同的元素 需要删除 并放入新数组中
      deleteArr.push(element)
      array.splice(index, 1)
      index--
    }
  }
  return deleteArr
}

export function pullAll(array, values) {
  const deleteArr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (values.indexOf(element) !== -1) {
      // 数组中有与values中相同的元素 需要删除 并放入新数组中
      deleteArr.push(element)
      array.splice(index, 1)
      index--
    }
  }
  return deleteArr
}
