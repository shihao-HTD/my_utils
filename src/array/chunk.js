/*
chunk(array, size): 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
*/
export function chunk(array, size) {
  const bigArr = []
  let smallArr = []

  // 对size进行界限判定
  size = size || 1
  if (size < 0) {
    size = 1
  }

  array.forEach((item) => {
    if (smallArr.length === 0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)

    if (smallArr.length === size) {
      smallArr = []
    }
  })

  return bigArr
}

