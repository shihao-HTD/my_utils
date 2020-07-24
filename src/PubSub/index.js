/*
PubSub 包含n个方法的对象
1. subscribe(msgName, callback): 订阅消息
2. publish(msgName, data): 发布异步的消息
3. publishSync(msgName, data):  发布同步的消息
4. unsubscribe(flag): 取消消息订阅
*/
export const PubSub = {
  subscribe(msgName, callback) {
    const { callbacks } = this
    if (callbacks[msgName]) {
      callbacks[msgName][++this.token] = callback
    } else {
      callbacks[msgName] = {}
      callbacks[msgName][++this.token] = callback
    }
    return this.token
  },
  publish(msgName, data) {
    const { callbacks } = this
    setTimeout(function () {
      if (callbacks[msgName]) {
        for (const token in callbacks[msgName]) {
          if (callbacks[msgName].hasOwnProperty(token)) {
            callbacks[msgName][token](data)
          }
        }
      }
    }, 0)
  },
  publishSync(msgName, data) {
    const { callbacks } = this
    if (callbacks[msgName]) {
      for (const token in callbacks[msgName]) {
        if (callbacks[msgName].hasOwnProperty(token)) {
          callbacks[msgName][token](data)
        }
      }
    }
  },
  unsubscribe(flag) {
    if (flag === undefined) {
      this.callbacks = {}
    } else if (typeof flag === "string") {
      this.callbacks[flag] = null
    } else {
      for (const msgName in this.callbacks) {
        if (this.callbacks.hasOwnProperty(msgName)) {
          const msgCallbacks = this.callbacks[msgName]
          for (const token in msgCallbacks) {
            if (msgCallbacks.hasOwnProperty(token)) {
              if (+token === flag) {
                delete msgCallbacks[token]
                return
              }
            }
          }
        }
      }
    }
  },
  callbacks: {},
  token: 0,
}
