/*
* 合并concat()
  语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]])
  功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
* */
export default function (array, ...args) {
  const arr = [...array]
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      arr.push(...arg)
    } else {
      arr.push(arg)
    }
  })
  return arr
}
