/**
 * 泛型:
 *  不预先确定的数据类型，具体的类型在使用的时候才能确定。可以理解为类型变量。
 *
 *  使用（以函数为例）：
 *    1. 在函数名称后面 <T> , 其中这个 T 就是一个不确定的数据类型，它可以使任何你喜欢的字母；
 *    2. 在要使用类型的位置，直接使用 T 即可。
 */

// 实现一个根据不同的类型，返回不同的数据
// type ParamsType = number | string
function fn<T>(params: T): T {
  if (typeof params === 'string') {
    const str = params.length
    // do something ...
    return params
  } else if (typeof params === 'number') {
    return params
  } else {
    return params
  }
}

/**
 * 当我们把 1 当参数传入时，ts 解释器会将 T =  1， 这个时间，就形成了一个完整的类型，所有设置了 T 的地方，
 * 都需要遵循入参
 */
fn(1)

function fn1(arg: number | string): number | string {
  if (typeof arg === 'string') {
    return `#${arg}#`
  } else if (typeof arg === 'number') {
    return arg++
  }
}

/**
 * 在 interface 中使用 泛型
 */

// 1. 接口中的某一个类型中使用泛型
interface Fn1 {
  <T>(arg: T) : T,
  add: <T>(arg: T) => T,
}

// 2. 接口全局都可以使用泛型
interface Fn2<T> {
  add: (arg: T) => T,
  index: T,
}

/**
 * 在 class 中使用泛型
 *  1. 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
 */
class Fn3<T> {
  constructor(name) {
    this.name = name
  }
  name: T

  // 静态成员不能引用类类型参数
  // static _id: T

  func(arg: T): T {
    return arg
  }
}

// 调用的方式
let stringNumeric = new Fn3<string>('abc');