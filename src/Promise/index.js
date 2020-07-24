/*    定义整体结构
  Promise构造函数的实现
  Promise.then()/catch()的实现
  Promise.resolve()/reject()的实现
  Promise.all/race()的实现
  Promise.resolveDelay()/rejectDelay()的实现*/

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

function Promise(excutor) {
  const that = this
  // 定义状态和保存的数据 以及回调队列
  this.status = PENDING
  this.data = undefined
  // {onResolved,onRejected}
  this.callbacks = []
  // 定义resolve函数和reject函数
  function resolve(value) {
    // 改变状态只执行一次
    if (that.status !== PENDING) {
      return
    }
    // 改变状态并保存数据
    that.status = RESOLVED
    that.data = value
    // 如果回调队列里有onResolved函数 那么执行函数并传入data数据
    that.callbacks.forEach((obj) => {
      setTimeout(() => {
        obj.onResolved(value)
      }, 0)
    })
  }
  function reject(reason) {
    // 改变状态只执行一次
    if (that.status !== PENDING) {
      return
    }
    // 改变状态并保存数据
    that.status = REJECTED
    that.data = reason
    // 如果回调队列里有onRejected函数 那么执行函数并传入data数据
    that.callbacks.forEach((obj) => {
      setTimeout(() => {
        obj.onRejected(reason)
      }, 0)
    })
  }

  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
/*
  1. 返回一个新的promise
  2. 新的promise的状态由onResolved/onRejected执行的结果决定
  1). 返回一个非promise   ===> 成功
  2). 抛出异常  ===> 失败
  3). 返回一个promise  ===> 与这个promise的结果一致
  3. 在then中要对onResolved/onRejected进行处理: 根据当前promise的状态来操作
  1). resolved: 异步调用onResolved
  2). rejected: 异步调用onRejected
  3). pending: 将onResolved/onRejected保存到callbacks中
  */

Promise.prototype.then = function (onResolved, onRejected) {
  const that = this
  // 对onResolved和onRejected进行处理 达到穿透效果
  onResolved = typeof onResolved === "function" ? onResolved : (value) => value
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason
        }

  return new Promise((resolve, reject) => {
    function handleCallback(callback) {
      try {
        const result = callback(that.data)
        if (result instanceof Promise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    if (this.status === RESOLVED) {
      setTimeout(() => {
        handleCallback(onResolved)
      }, 0)
    } else if (this.status === REJECTED) {
      setTimeout(() => {
        handleCallback(onRejected)
      }, 0)
    } else {
      this.callbacks.push({
        onResolved: (value) => handleCallback(onResolved),
        onRejected: (reason) => handleCallback(onRejected),
      })
    }
  })
}
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}
/*
  Promise.resolve 方法: (value) => {}
  (1) value: 成功的数据或 Promise 对象
  说明: 返回一个成功/失败的 Promise 对象
  * */
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}
/*
  Promise.reject 方法: (reason) => {}
  (1) reason: 失败的原因
  说明: 返回一个失败的 Promise 对象
  * */
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}
/*
  Promise.race 方法: (promises) => {}
  (1) promises: 包含 n 个 Promise 的数组
  说明: 返回一个新的 Promise, 第一个完成的 Promise 的结果状态就是最终的结果状态
  */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject)
    })
  })
}
/*
  Promise.all 方法: (promises) => {}
  (1) promises: 包含 n 个 Promise 的数组
  说明: 返回一个新的 Promise, 只有所有的 Promise 都成功才成功, 只要有一个失败了就
  直接失败
  */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let values = []
    let count = 0
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          values[index] = value
          count++
          if (count === promises.length) {
            resolve(values)
          }
        },
        (reason) => {
          reject(reason)
        }
      )
    })
  })
}
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    }, time)
  })
}
Promise.rejectDelay = function (reason, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason)
    }, time)
  })
}
export default Promise
