"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points } from "three";

function seededValue(index: number, salt: number) {
  return (((index + 1) * 9301 + salt * 49297) % 233280) / 233280;
}

function Particles({ count = 120 }: { count?: number }) {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (seededValue(i, 1) - 0.5) * 14;
      arr[i * 3 + 1] = (seededValue(i, 2) - 0.5) * 8;
      arr[i * 3 + 2] = (seededValue(i, 3) - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#F59E0B"
        size={0.06}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function EmberCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.4} />
      <Particles />
    </Canvas>
  );
}
