/*三种基本排序*/
// 冒泡排序
export function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        /*
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
        */
        ;[array[j], array[i]] = [array[i], array[j]]
      }
    }
  }
  return array
}
// 选择排序
export function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      // 需要交换
      ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  return array
}
// 插入排序
export function insertSort(array) {}
