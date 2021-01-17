/**
 * 定义一个函数的几种方式：
 *  1. 直接定义；
 *  2. 变量形式；
 *  3. interface
 *  4. type
 */

// 1.
let add1 = (x: number, y: number): number => x + y

// 2.
let add2: (x: number, y: number) => number
add2 = (x, y) => x + y

// 3. 
interface Add3 {
  (x: number, y: number): number,
}
let add3: Add3 = (x, y) => x + y

// 4.
type Add4 = (x: number, y: number) => number
let add4: Add4 = (x, y) => x + y


/**
 * 可选参数
 *  1. 可选参数后面 不可 跟必传参数；
 */
function add(x: number, y?: number): number {
  return y ? x + y : x
}

/**
 * 默认参数
 *  1. 调用必选参数的时候，如果后面有参数，需要使用 undefined 占位
 */
function add5(x: number, y = 1, z: number, q = 1): number {
  return x + y + z + q
}
add5(1, undefined, 1)

/**
 * 剩余参数, rest 是以数组的形式存在
 */
function add6(x: number, ...rest: number[]): number {
  return x + rest.reduce((accu, cur) => accu + cur)
}
