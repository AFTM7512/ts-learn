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

/**
 * 函数参数兼容性问题：
 *  1. 固定参数，参数数量相同；
 *  2. 固定参数能兼容可选参数和剩余参数
 *  3. 可选参数不兼容剩余参数和固定参数
 *  4. 剩余参数兼容可选参数和固定参数；
 *  5. 参数类型要相同；
 */


/**
 * 函数重载： 依据不同参数类型或参数个数执行一些不同函数体的实现
 *  1. 定义好不同类型，不同个数的入参以及返回值类型；
 *  2. 在一个相对宽泛的（包含定义的类型）中去实现；
 *  3. ts 编译器是从第一个定义的类型开始匹配，因此我们要把容易匹配的放在前面
 */
function add8(x: number, y: number): number;
function add8(x: string, y: string): string;

function add8(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x + '&&' + y
  }
}