/*
  切片slice()
  语法: var new_array = slice(array, [begin[, end]])
  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
*/

export function slice(array, begin, end) {
  const arr = []
  // 如果是空数组 直接返回
  if (array.length === 0) {
    return arr
  }
  // 对begin和end进行界限判定
  begin = begin || 0
  end = end || array.length

  if (begin < 0) {
    begin = 0
  }
  if (end > array.length) {
    end = array.length
  }

  for (let i = begin; i < end; i++) {
    const element = array[i]
    arr.push(element)
  }
  return arr
}
