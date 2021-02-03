// import React, { Component } from 'react'
// import HelloClass from './HelloClass.tsx'

// interface ExtendProperty {
//   flag: boolean
// }
// function HelloHOC<P>(wrapComponent: React.ComponentType<P>) {
//   return class extends Component<P & ExtendProperty> {
//       constructor(props) {
//         super(props)
//       }
//       state = {
//         flag: false
//       }
//     render() { 
//       return this.state.flag ? '--' : <wrapComponent />
//     }
//   }
// }

// export default HelloHOC(HelloClass)