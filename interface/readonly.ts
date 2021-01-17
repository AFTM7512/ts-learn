interface Cat {
  readonly id: number,
  name: string
}

let tom: Cat = {
  id: 1,
  name: 'Tom'
}

// 只读属性不可修改
// tom.id = 123
