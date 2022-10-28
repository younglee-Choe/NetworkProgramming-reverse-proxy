import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function CoinMesh() {
    const mesh = useRef(null)

    useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01))

    return (
        <>
            <mesh ref={mesh} scale={0.7}>
                <cylinderBufferGeometry args={[1, 1, 0.3, 50]}></cylinderBufferGeometry>
                <meshLambertMaterial attach="material" color="#ff9800"></meshLambertMaterial>
            </mesh>
        </>
    )
}

export { CoinMesh }