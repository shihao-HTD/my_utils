/*
  语法: object mergeObject(...objs)
  功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
*/
export function mergeObject(...objs) {
  const mergeObj = {}

  objs.forEach((obj) => {
    for (const key in obj) {
      if (!mergeObj.hasOwnProperty(key)) {
        mergeObj[key] = obj[key]
      } else {
        // 如果 mergeObj已经存在key对应的value 则将其合并为一个数组
        mergeObj[key] = [].concat(mergeObj[key], obj[key])
      }
    }
  })

  return mergeObj
}
