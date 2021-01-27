/**
 * 联合类型 |
 *  声明的类型并不确定，可以为多个类型中的一个。
 */
function getValue(arg: number | string): number {
  if (typeof arg === 'string') {
    return arg.length
  } else {
    return arg
  }
}

let param: number | string = 123
param = 'abc'


/**
 * 字面量类型
 *   字面量类型用来约束取值只能是某几个值（字符串 | 数字...）中的一个。
 */

let a: 'A' | 'B' | 'C' = 'A'
let b: 1 | 2 | 3 = 3

/**
 *  如果一个对象是联合类型，当他的类型不确定时，只能访问他们的共有成员
 *  利用两种类型的共有属性，来创建代码的保护区块
 */
interface ISquare {
  type: 'square',
  size: number
}

interface IRectangle {
  type: 'rectangle',
  width: number,
  height: number
}

interface ICricle {
  type: 'circle',
  r: number
}

/**
 * 当我们写好所有的 case 后，如果需要新增一种 shape，
 * 会导致，类型检查不会报错，但是运行后就会报错。
 * 这个时候有两种情况可以保证 switch 每种情况都有对应的 case
 *  1. 增加一个明确的返回值，因为没有通过 switch 的，返回值就为 undefined;
 *  2. 增加一个 nerve 类型。
 */
type Shape = ISquare | IRectangle | ICricle
function getArea(shape: Shape): number {
  // 此时可以访问 shape 下的所有共有成员，然后创建代码的保护区块
  switch (shape.type) {
    case 'square':
      return shape.size * shape.size
    case 'rectangle':
      return shape.width * shape.height
    case 'circle':
      return shape.r * Math.PI
    default:
      /**
       * 如果联合类型中，有一种没有经过 case ，则说明， switch 会走到这里，然后讲 shape 传递给 e: never,
       * 这个时候 ts 就能检测到这个错误。
       */
      return ((e: never) => { throw new Error() })(shape) // 类型“ICricle”的参数不能赋给类型“never”的参数
  }
}

