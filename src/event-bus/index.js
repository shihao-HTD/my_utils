/*
  EventBus: 包含所有功能的全局事件总线对象
  EventBus.on(eventName, listener): 绑定事件监听
  EventBus.emit(eventName, data): 分发事件
  EventBus.off(eventName): 解绑事件监听
*/

const eventBus = {
  on(eventName, listener) {
    if (this.callbacks[eventName] && Array.isArray(this.callbacks[eventName])) {
      // 如果callbacks里已经存在对应的事件队列 直接push
      this.callbacks[eventName].push(listener)
    } else {
      // 如果不存在对应的事件队列 创建后添加进去
      this.callbacks[eventName] = [listener]
    }
  },
  off(eventName) {
    if (eventName === undefined) {
      this.callbacks = {}
    } else {
      this.callbacks[eventName] = null
    }
  },
  emit(eventName, data) {
    const { callbacks } = this
    if (Array.isArray(callbacks[eventName])) {
      callbacks[eventName].forEach((callback) => {
        callback(data)
      })
    }
  },
  callbacks: {},
}

export default eventBus
