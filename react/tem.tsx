/**
 * 1. 函数式组件
 */

// interface Greeting {
//   name: string
// }

// export default function Hello(props: Greeting) {
//   const { name } = props
//   return (
//     <div>hello { name }</div>
//   )
// }

// Hello.defaultProps = {
//   name: "typescript"
// }

/**
 * class 组件
 */
// import React,{ Components } from 'react'

// interface Greeting {
//   name: string
// }
// interface State {
//   count: number
// }
// export default class HelloClass extends Components<Greeting, State> {
//   constructor(props) {
//     super(props)
//   }
//   state: State = {
//     count: 0
//   }

//   static defaultProps = {

//   }

//   render() {
//     return (
//       <div>{ this.state.count }</div>
//     )
//   }
// }