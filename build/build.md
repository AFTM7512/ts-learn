## 编译 ts 文件的两种方式

### 1. 使用 `ts` `ts-loader` 编译


### 2. 使用 `Babel` 编译


### 总结：
1. 如果没有使用 `Babel` 的，建议使用 `ts` 自身的编译器，配合 `ts-loader`；
2. 如果项目中i经使用了 `Babel`，安装 `@babel/preset-typescript`(可配合 tsc 做类型检查)；
3. 两种编译工具不要混用。