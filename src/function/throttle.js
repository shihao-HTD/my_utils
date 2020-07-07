/* 自定义函数节流方法 */
function throttle(callback, delay) {
  let oldTime = 0
  return function (event) {
    // 表面执行的事件回调函数
    const currentTime = Date.now()
    if (currentTime - oldTime > delay) {
      /* 实际执行的事件回调函数
       将callback的this改变为绑定事件的元素
       参数为事件对象event */
      callback.call(this, event)
      // 将当前时间保存为oldTime
      oldTime = currentTime
    }
  }
}

export default throttle
