/*自定义call方法*/
export function call(fn, obj, ...args) {
  if (obj === null || obj === undefined) {
    obj = window
  }
  obj.myCall = fn
  const result = obj.myCall(...args)
  delete obj.myCall
  return result
}
