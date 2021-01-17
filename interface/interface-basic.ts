// interface 可以用来定义 类 函数 对象 等一系列数据的内部结构

/**
 * 对象类型的接口。如：下面模仿后端返回接口
 * 1. list 对象中 可以 有定义以外的字段
 * 2. list 对象中 不可以 缺少定义的字段
 */
interface List {
  id: number;
  name: String;
  // 字符串索引签名： 可以匹配任意的 key， 且它的类型为  any
  // [x: string]: any
}
interface Result {
  list: List[]
}

function render(result: Result) {
  result.list.forEach((item) => {
    console.log(item);
  })
}

// 直接以对象字面量的形式传入，则 不可以  出现 interface 中没有的字段
render({
  list: [
    {
      id: 1,
      name: 'zs',
      // age: 18 // 提示 “age” 不在类型“List”中
    },
    {
      id: 2,
      name: 'ls'
    }
  ]
})

/**
 * 绕过上述错误的有三种方法；
 *  1. 将对象字面量赋值给一个变量；
 *  2. 类型断言
 *  3. 字符串索引签名； 
 */

// 1. 
let result = {
  list: [
    {
      id: 1,
      name: 'zs',
      age: 18
    },
    {
      id: 2,
      name: 'ls'
    }
  ]
}
// 以变量形式传入， 可以 出现 interface 中没有的字段
render(result)

// 类型断言
render({
  list: [
    {
      id: 1,
      name: 'zs',
      age: 18 // 提示 “age” 不在类型“List”中
    },
    {
      id: 2,
      name: 'ls'
    }
  ]
} as Result)

