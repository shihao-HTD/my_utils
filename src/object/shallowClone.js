/*实现浅拷贝
方法一: 利用ES6语法
方法二: 利用ES5语法*/

export function clone1(target) {
  if (target instanceof Array) {
    return [...target]
  } else if (target !== null && typeof target === "object") {
    return { ...target }
  } else {
    // 如果不是对象或者数组
    return target
  }
}
export function clone2(target) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === "object")
  ) {
    const cloneTarget = target instanceof Array ? [] : {}
    for (const targetKey in target) {
      if (target.hasOwnProperty(targetKey)) {
        // 如果是target自身的属性 那么就赋值给克隆的对象或者数组
        cloneTarget[targetKey] = target[targetKey]
      }
    }
    return cloneTarget
  } else {
    // 如果不是对象或者数组
    return target
  }
}
