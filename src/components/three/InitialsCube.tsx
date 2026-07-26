import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const HALF = 0.78;
const FACES: { position: [number, number, number]; rotation: [number, number, number] }[] = [
  { position: [0, 0, HALF], rotation: [0, 0, 0] },
  { position: [0, 0, -HALF], rotation: [0, Math.PI, 0] },
  { position: [HALF, 0, 0], rotation: [0, Math.PI / 2, 0] },
  { position: [-HALF, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  { position: [0, HALF, 0], rotation: [-Math.PI / 2, 0, 0] },
  { position: [0, -HALF, 0], rotation: [Math.PI / 2, 0, 0] },
];

function Cube({ initials }: { initials: string }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    const g = ref.current;
    if (!g) return;
    const speed = hovered ? 2.1 : 0.5;
    g.rotation.y += delta * speed;
    g.rotation.x += delta * speed * 0.35;
  });

  return (
    <group
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.14} smoothness={6}>
        <meshStandardMaterial
          color="#0f1720"
          metalness={0.5}
          roughness={0.25}
          emissive="#0a2a08"
          emissiveIntensity={0.4}
        />
      </RoundedBox>
      {FACES.map((face, i) => (
        <Text
          key={i}
          position={face.position}
          rotation={face.rotation}
          fontSize={0.5}
          letterSpacing={-0.04}
          color="#7CFF4F"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {initials}
        </Text>
      ))}
    </group>
  );
}

export default function InitialsCube({ initials = "SAS" }: { initials?: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#a6ff86" />
      <pointLight position={[-4, -2, 2]} intensity={2.6} color="#39FF88" />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Cube initials={initials} />
      </Float>
    </Canvas>
  );
}
