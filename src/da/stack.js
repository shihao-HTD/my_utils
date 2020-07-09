/*
自定义栈类型 Stack
*/
export function Stack() {
  let arr = []
  this.push = function (element) {
    arr.push(element)
  }
  this.pop = function () {
    return arr.pop()
  }
  this.size = function () {
    return arr.length
  }
  this.isEmpty = function () {
    return arr.length === 0
  }
  this.peek = function () {
    return arr[arr.length - 1]
  }
  this.clear = function () {
    arr = []
  }
}
