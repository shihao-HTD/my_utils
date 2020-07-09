/*
自定义优先级队列 Queue
*/
export function PriorityQueue() {
  let arr = []
  this.enqueue = function (data, priority) {
    if (priority < 0 || priority > 100) {
      throw new Error("优先级必须在0-100之间")
    }
    if (arr.length === 0) {
      arr.push({ data, priority })
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].priority > priority) {
          arr.splice(i, 0, { data, priority })
          return
        }
      }
      // priority是最大的 插入到最后
      arr.push({ data, priority })
    }
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
