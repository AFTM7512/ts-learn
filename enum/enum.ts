// 数字枚举

// 我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// 字符串枚举
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
enum StrDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 枚举的使用

// 1. 访问枚举中的成员，作为变量的值
enum Words {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}
let str1 = Words.A

// 作为变量的类型注解
enum Gender {Female,Male}
let userGender:Gender