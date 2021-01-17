interface Person {
  id: number,
  name: string,
  sex: number,
  age?: number, // 女性的年纪不能问哇，不要问为什么？
}

enum Sex {
  female,
  male
}

/**
 * 使用接口描述对象
 *  其中 age 可写可不写
 */
let obj: Person = {
  id: 1,
  name: 'zs',
  sex: Sex.male
}

/**
 * 使用接口模拟后台返回结果
 */

interface Result {
  resultList: Person[]
}

function getPersonInfo(result: Result): void {
  console.log(result);
}
let resultData = {
  list: [
    {
      id: 1,
      name: '张三',
      sex: Sex.male,
      age: 18,
    },
    {
      id: 1,
      name: '小美',
      sex: Sex.female,
    },
  ]
}