import { Center, Decal, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";

export function CapModel({ tshirtColor, designTexture, onViewChange }) {
  const { nodes, materials } = useGLTF("/3Dmodels/cap.glb");
  const texture = useTexture(
    designTexture || "/3Dmodels/textures/design-fallback.png"
  );
  const meshRef = useRef();

  const meshNode = useMemo(
    () => Object.values(nodes).find((node) => node.isMesh) || null,
    [nodes]
  );

  const fallbackMaterial = useMemo(
    () => Object.values(materials)[0] || undefined,
    [materials]
  );

  useEffect(() => {
    if (meshRef.current && tshirtColor) {
      meshRef.current.material.color.set(tshirtColor);
    }
  }, [tshirtColor]);

  if (!meshNode || !meshNode.geometry) return null;

  return (
    <Center position={[0, 0, 0]}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={meshNode.geometry}
          material={meshNode.material || fallbackMaterial}
          scale={1.6}
          ref={meshRef}
          onClick={() => onViewChange?.("front")}
        >
          <Decal
            position={[0, 0.4, 0.55]}
            rotation={[0, 0, 0]}
            scale={[0.28, 0.22, 0.28]}
          >
            <meshStandardMaterial
              map={texture}
              toneMapped={false}
              transparent
              polygonOffset
              polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>
      </group>
    </Center>
  );
}

useGLTF.preload("/3Dmodels/cap.glb");
