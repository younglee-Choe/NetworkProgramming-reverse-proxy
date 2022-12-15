// import 'aframe'
// import 'aframe-particle-system-component'
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
// import * as THREE from 'three'
// import { Entity, Scene } from 'aframe-react'

// // class VRScene extends React.Component {
// //   render () {
// //     return (
// //       <div className='VR-container'>
// //         <Scene>
// //           <Entity geometry={{primitive: 'box'}} material={{color: 'violet'}} position={{x: 0, y: 0, z: -5}}/>
// //           <Entity particle-system={{preset: 'snow'}}/>
// //           <Entity light={{type: 'point'}}/>
// //           <Entity gltf-model={{src: '../assets/animated_robot/scene.gltf'}}/>
// //           <Entity text={{value: 'Hello, WebVR!'}}/>
// //         </Scene>
// //       </div>
// //     )
// //   }
// // }

// class VRScene extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {color: 'red'}
//   }

//   changeColor() {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue']
//     this.setState({
//       color: colors[Math.floor(Math.random() * colors.length)]
//     })
//   }

//   render () {
//     return (
//       <div className='VR-container'>
//         <Scene>
//           <a-assets crossOrigin="anonymous">
//             <a-asset-item id="tree" src="https://uploads.codesandbox.io/uploads/user/dff5c87f-9438-49ee-b662-39fe96f33971/0Ccv-lady-optimized.glb"></a-asset-item>
//             <img crossOrigin="anonymous" id="boxTexture" src="https://i.imgur.com/Nhlbspt.gif" />
//             <img crossOrigin="anonymous" id="skyTexture" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />
//           </a-assets>

//           {/* <a-entity src="#tree" position="0 2 -1" rotation="0 45 45" scale="10 10 10" /> */}
//           <a-box src="#boxTexture" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box>
//           {/* <a-sky src="#skyTexture"></a-sky> */}
//           <a-sky color="#6EBAA7"></a-sky>
          
//           {/* <a-assets>        
//             <a-asset-item id="mod" src="../assets/magnemite/scene.gltf"></a-asset-item>
//           </a-assets>
//           <Entity
//             id="myMod"
//             gltfModel="#mod"
//             animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
//             position={{x: 0, y: 1, z: -3}}
//           /> */}

//           {/* <Entity id="box"
//             geometry={{primitive: 'box'}}
//             material={{color: this.state.color, opacity: 0.6}}
//             animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
//             position={{x: 0, y: 1, z: -3}}
//             events={{click: this.changeColor.bind(this)}}>
//           </Entity>
//           <Entity light={{type: 'point'}}/> */}

//           {/* <a-assets>
//             <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
//             <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
            
//           </a-assets>

//           <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
//           <Entity primitive="a-light" type="ambient" color="#445451"/>
//           <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
//           <Entity primitive="a-sky" src="#skyTexture" height="2048" radius="30" theta-length="90" width="2048"/>
//           <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
//           <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>

//           <Entity id="box"
//             geometry={{primitive: 'box'}}
//             material={{color: this.state.color, opacity: 0.6}}
//             animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
//             animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
//             position={{x: 0, y: 1, z: -3}}
//             events={{click: this.changeColor.bind(this)}}>
//             <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
//                     geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
//                     material={{color: '#24CAFF'}}/>
//           </Entity>

//           <Entity primitive="a-camera">
//             <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
//           </Entity> */}

//           <a-camera>
//             <a-cursor></a-cursor>
//           </a-camera>
//         </Scene>
//       </div>
//     )
//   }
// }

// export { VRScene }