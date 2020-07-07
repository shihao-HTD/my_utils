/*自定义函数防抖方法*/
function debounce(callback, delay) {
  let timeoutId = 0
  return function (event) {
    // 表面执行的事件回调函数
    // 如果上一次的定时器任务还没执行 就清除定时器
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      // 实际执行的回调函数 并改变this和传入event
      callback.call(this, event)
    }, delay)
  }
}
export default debounce
