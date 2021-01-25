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
 * 当我们把
 */
fn(1)

function fn1(arg: number | string): number | string {
  if (typeof arg === 'string') {
    return `#${arg}#`
  } else if (typeof arg === 'number') {
    return arg++
  }
}