/*自定义bind方法*/
import { call } from "./call"
export function bind(fn, obj, ...args1) {
  return (...args2) => {
    return call(fn, obj, ...args1, ...args2)
  }
}
