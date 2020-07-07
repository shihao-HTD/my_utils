/*自定义apply方法*/
import { call } from "./call"
export function apply(fn, obj, args) {
  return call(fn, obj, ...args)
}
