import { Canvas } from "@react-three/fiber"
import Particles from "./Particles"

export default function Background() {
  return (
    <Canvas
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 12], fov: 60 }}
    >
      <fog attach="fog" args={["#02010a", 8, 25]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 10, 5]} intensity={0.4} />

      <Particles />
    </Canvas>
  )
}
