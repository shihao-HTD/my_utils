/*
实现深拷贝
1). 大众乞丐版
问题1: 函数属性会丢失
问题2: 循环引用会出错
2). 面试基础版本
解决问题1: 函数属性还没丢失
3). 面试加强版本
解决问题2: 循环引用正常
4). 面试加强版本2(优化遍历性能)
数组: while | for | forEach() 优于 for-in | keys()&forEach()
对象: for-in 与 keys()&forEach() 差不多
*/
// 方法一 存在问题 不能拷贝函数  循环引用会出错
export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

// 方法二  解决了函数属性丢失的问题 尚未解决循环引用的问题
export function deepClone2(target) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === "object")
  ) {
    const cloneTarget = target instanceof Array ? [] : {}
    for (const targetKey in target) {
      if (target.hasOwnProperty(targetKey)) {
        // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组
        cloneTarget[targetKey] = deepClone2(target[targetKey])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

/*
方法三
解决了: 函数属性会丢失
解决: 循环引用会出错
解决思路:
    目标: 同一个对旬/数组只能被克隆1次
    创建克隆对象前:　如果克隆对象已经存在, 直接返回
    创建克隆对象后: 保存克隆对象
    缓存容器结构: Map  key: target, value: cloneTaget
*/

export function deepClone3(target, map = new Map()) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === "object")
  ) {
    let cloneTarget = map.get(target)
    if (!cloneTarget) {
      // 如果克隆对象不存在 保存克隆对象
      cloneTarget = target instanceof Array ? [] : {}
      map.set(target, cloneTarget)
      for (const targetKey in target) {
        if (target.hasOwnProperty(targetKey)) {
          // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组
          cloneTarget[targetKey] = deepClone3(target[targetKey], map)
        }
      }
    }

    return cloneTarget
  } else {
    return target
  }
}
/*
优化遍历性能
数组: while | for | forEach() 优于 for-in | keys()&forEach()
对象: for-in 与 keys()&forEach() 差不多
* */
export function deepClone4(target, map = new Map()) {
  let cloneTarget
  if (target instanceof Array) {
    // 如果是数组
    cloneTarget = map.get(target)
    if (!cloneTarget) {
      // 如果克隆数组不存在 保存克隆数组
      cloneTarget = []
      map.set(target, cloneTarget)
      for (let i = 0; i < target.length; i++) {
        cloneTarget[i] = deepClone4(target[i], map)
      }
    }
    return cloneTarget
  } else if (target !== null && typeof target === "object") {
    // 如果是对象
    cloneTarget = map.get(target)
    if (!cloneTarget) {
      // 如果克隆对象不存在 保存克隆对象
      cloneTarget = {}
      map.set(target, cloneTarget)
      for (const targetKey in target) {
        if (target.hasOwnProperty(targetKey)) {
          // 如果是对象/数组自身的属性 那么就赋值给克隆的对象/数组
          cloneTarget[targetKey] = deepClone4(target[targetKey], map)
        }
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
