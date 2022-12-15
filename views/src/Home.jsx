import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function onclickHandleCube() {
    window.location.href = '/'
}

function Home() {
    return(
        <div id="cube-container">
            <Canvas id="cube-canvas">
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <Stars/>
                <mesh position={[0,0,0]} onClick={onclickHandleCube}>
                    <boxBufferGeometry attatch="geometry" />
                    <meshLambertMaterial attatch="material" color="white" />
                </mesh>
            </Canvas>
        </div>
  )
}

export { Home }