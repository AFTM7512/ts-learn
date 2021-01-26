/**
  * 类型约束:
  *   泛型是指不确定的类型，这样就导致可能是任意类型，但是我们也许只是部分类型，
  *   比如为序列的类型，此时有需求时，要使用序列的 length 方法，这个时候就需要使用类型约定；
  *   来限制泛型的范围，并表示有哪些方法可以调用。如：
  */

// 使用 type 来实现类型约束
type TList = string | []
function getLength<T extends TList> (arg: T): number {
  return arg.length
}


// 使用 interface 来实现泛型约束
interface IList {
  length: number
}
function getListLength<T extends IList> (arg: T): number {
  return arg.length
}
// 此时使用的类型没有 length 属性的话，则会报错。 
// getListLength(1) // 类型“number”的参数不能赋给类型“IList”的参数
getListLength('abc')
getListLength({
  length: 123
})