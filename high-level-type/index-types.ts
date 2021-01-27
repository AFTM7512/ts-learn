/**
 * keyof： 索引类型
 *  用来约束对象与对象属性之间的对应关系
 */


// 此时没办法明确的知道 obj 有什么属性，同时也不知道返回值的属性
function getValue(obj, key) {
  return obj[key]
}

let obj = {
  a: 1,
  b: 2,
  c: 3
}
getValue(obj, 'a')
getValue(obj, 'b')
getValue(obj, 'f') // f 不在 obj 中，但是没有报错


function getVal<T, K extends keyof T> (obj : T, key : K): T[K] {
  return obj[key]
}
getVal(obj, 'a')
getVal(obj, 'b')
// getVal(obj, 'd') // 类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。
