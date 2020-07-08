/*
自定义new工具函数
语法: newInstance(Fn, ...args)
功能: 创建Fn构造函数的实例对象
实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
*/
export function newInstance(Fn, ...args) {
  const obj = {}
  const result = Fn.call(obj, ...args)

  /*如果result返回的类型是引用数据类型 则返回调用Fn函数后的返回值*/
  if (
    result !== null &&
    (typeof result === "object" || typeof result === "function")
  ) {
    return result
  }
  // result是基本数据类型 则返回new 构造函数内部创建的对象
  // 并且将实例对象的隐式原型指向构造函数的显示原型
  obj.__proto__ = Fn.prototype

  return obj
}
