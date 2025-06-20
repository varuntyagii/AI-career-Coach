import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function ThreeBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      background: 'linear-gradient(120deg, #181c24 0%, #232946 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={2} />
      </Canvas>
    </div>
  );
} 