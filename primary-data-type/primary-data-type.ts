// Number 
let num: number = 123
let str: string = '123'
let bool: boolean = true

// 数组
let arr: number[] = [1, 2, 3]
let arr1: (string | number)[] = [1, 2, 3, 'abc'] // 通过联合类型实现数组内部元素的多个类型
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, 'abc']

// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 且元组的个数需要与类型一一对应
let tup: [number, string] = [123, 'abc']


// 函数
let fn = (x: number, y: number): number => x + y

let fn1: (x: number, y: number) => number
fn1 = (a, b) => a + b


// 对象
let obj: { x: number, y: number } = {
  x: 123,
  y: 456
}
obj.x = 789

// void
// 如果一个函数没有任何返回值，那么它就是 void 类型
let fn2 = (x: string, y: string): void => console.log(x, y)

// any
// 可以是任意类型
let num2: any = 123
num2 = '123'

// never
// never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}