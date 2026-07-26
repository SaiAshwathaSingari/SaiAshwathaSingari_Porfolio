import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

interface PlanetConfig {
  radius: number;
  size: number;
  speed: number;
  color: string;
  offset: number;
}

// Apple-green themed "solar system". On-brand greens + one neutral moon-ish planet.
const PLANETS: PlanetConfig[] = [
  { radius: 1.4, size: 0.13, speed: 0.9, color: "#a6ff86", offset: 0.5 },
  { radius: 2.0, size: 0.22, speed: 0.6, color: "#39FF88", offset: 2.1 },
  { radius: 2.7, size: 0.16, speed: 0.45, color: "#34d399", offset: 4.0 },
  { radius: 3.4, size: 0.28, speed: 0.32, color: "#7CFF4F", offset: 1.2 },
  { radius: 4.1, size: 0.15, speed: 0.24, color: "#cbd5e1", offset: 5.0 },
];

function Orbit({ radius }: { radius: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.012, radius + 0.012, 128]} />
      <meshBasicMaterial
        color="#7CFF4F"
        transparent
        opacity={0.16}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Planet({ radius, size, speed, color, offset }: PlanetConfig) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return (
    <group ref={ref} rotation={[0, offset, 0]}>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

function System() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={group}>
      {/* Sun */}
      <mesh>
        <sphereGeometry args={[0.7, 48, 48]} />
        <meshStandardMaterial
          color="#7CFF4F"
          emissive="#7CFF4F"
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      <pointLight
        position={[0, 0, 0]}
        intensity={45}
        color="#a6ff86"
        distance={30}
        decay={2}
      />

      {PLANETS.map((p) => (
        <group key={p.radius}>
          <Orbit radius={p.radius} />
          <Planet {...p} />
        </group>
      ))}
    </group>
  );
}

export default function SolarSystem() {
  return (
    <Canvas
      camera={{ position: [0, 2.6, 6.2], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <Stars radius={40} depth={20} count={700} factor={2.2} fade speed={0.4} />
      <System />
      <EffectComposer>
        <Bloom
          intensity={1.1}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.5}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
