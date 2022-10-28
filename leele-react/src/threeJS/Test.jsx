import React from 'react'
import { Canvas } from '@react-three/fiber'
import { CoinMesh } from './CoinMesh'

function Test() {

    return (
        <Canvas>
            <CoinMesh></CoinMesh>
        </Canvas>
    )
}

export { Test }