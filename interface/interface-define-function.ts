
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
 * 混合类型的接口， 因为函数也是对象，所以函数本身是可以拥有自己的方法
 */
interface Lib {
  (): void,
  version: string,
  getVersion: () => string,
  getVer(): string,
}

function getLib() {
  let lib: Lib = (() => { }) as Lib
  lib.version = '1.0.0'
  lib.getVersion = () => lib.version
}