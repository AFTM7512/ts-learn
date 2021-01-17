/**
 * 当我们不确定一个接口中,有多少个属性的时候,可以使用可索引类型
 * 可索引类型:
 *  1. 字符串索引;
 *  2. 数字索引
 */

/**
 * 数字索引: 任意的数值 key 对应的值均为 string
 */
interface StringArray {
  [index: number]: string
}

// 此时添加任何其他类型的值,均报错
let words: StringArray = ['A', 'B', 'C']


/**
 * 字符串索引:
 * 
 */
interface Obj {
  [s: string]: string,
}
let obj1: Obj = {
  key: 'a'
}

// 数字索引可以与字符串索引混用,这样就可以 key 既可以为数字,也可以为字符串
// 但是数字索引的类型,必须是字符串索引类型的子类,
// 因为数字类型的索引会先转成字符串，然后再去索引得到返回值。如:

interface Mix {
  [s: string]: any,
  [i: number]: string
}
// 保证 i 对应的类型 为 s 的子类型,这样就可以混用