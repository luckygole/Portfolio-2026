import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Particles = () => {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0001
      ref.current.rotation.x += 0.00005
    }
  })

  const count = 5000
  const positions = new Float32Array(count * 3)

  // Close & dense particles (dusty mist)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 24  // smaller spread
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#b6a6ff"
        size={0.02}          // tiny particles
        transparent
        opacity={0.55}       // soft misty look
        depthWrite={false}
      />
    </points>
  )
}

export default Particles
