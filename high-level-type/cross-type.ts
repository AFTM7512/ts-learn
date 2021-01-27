/**
 * 交叉类型 &
 *  取所有类型的并集
 */
interface ICat {
  run(): void
}
interface IDog {
  sleep(): void
}

let pet: ICat & IDog = {
  run() {},
  sleep() {}
}

