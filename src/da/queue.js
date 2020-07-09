/*
 自定义队列 Queue
*/
export function Queue() {
  let arr = []
  this.enqueue = function (element) {
    arr.push(element)
  }
  this.dequeue = function () {
    return arr.shift()
  }
  this.size = function () {
    return arr.length
  }
  this.isEmpty = function () {
    return arr.length === 0
  }
  this.front = function () {
    return arr[0]
  }
}
