import React, { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress, Preload } from "@react-three/drei";
import { TextureLoader } from 'three';
import * as THREE from "three";

// --- Static Imports & Constants ---
import fastapiLogo from '../../assets/silhouette-logo/fastapi.png';
import postgresqlLogo from '../../assets/silhouette-logo/postgresql.png';
import tensorflowLogo from '../../assets/silhouette-logo/tensorflow.png';
import awsLogo from '../../assets/silhouette-logo/aws.png';
import graphqlLogo from '../../assets/silhouette-logo/graphql.png';
import javascriptLogo from '../../assets/silhouette-logo/javascript.png';
import typescriptLogo from '../../assets/silhouette-logo/typescript.png';
import pythonLogo from '../../assets/silhouette-logo/python.png';
import reactjsLogo from '../../assets/silhouette-logo/reactjs.png';
import nodejsLogo from '../../assets/silhouette-logo/nodejs.png';
import mongodbLogo from '../../assets/silhouette-logo/mongodb.png';
import gitLogo from '../../assets/silhouette-logo/git.png';
import dockerLogo from '../../assets/silhouette-logo/docker.png';

const TECHNOLOGIES = [
  "fastapi","postgresql","tensorflow","aws",
  "graphql","javascript","typescript","python",
  "reactjs","nodejs","mongodb","git","docker"
] as const;

const logoMap: Record<string,string> = {
  fastapi: fastapiLogo, postgresql: postgresqlLogo, tensorflow: tensorflowLogo,
  aws: awsLogo, graphql: graphqlLogo, javascript: javascriptLogo,
  typescript: typescriptLogo, python: pythonLogo, reactjs: reactjsLogo,
  nodejs: nodejsLogo, mongodb: mongodbLogo, git: gitLogo,
  docker: dockerLogo,
};

const ELECTRON_COLORS = [] as const;

// --- Loader Placeholder ---
const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-64 h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-white font-medium">
          Loading {Math.round(progress)}%...
        </p>
      </div>
    </Html>
  );
};

// --- Electron Component ---
interface ElectronProps {
  radius: number;
  speed: number;
  angleOffset: number;
  tiltX: number;
  tiltY: number;
  color: string;
  texture: THREE.Texture;
}
const Electron: React.FC<ElectronProps> = ({ radius, speed, angleOffset, tiltX, tiltY, color, texture }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock, camera }) => {
    const t = clock.elapsedTime;
    const angle = t * speed + angleOffset;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle) * Math.sin(tiltX);
    const z = radius * Math.sin(angle) * Math.cos(tiltY);
    ref.current.position.set(x, y, z);
    ref.current.lookAt(camera.position);
  });
  return (
    <mesh ref={ref}>
      <planeGeometry args={[0.3, 0.3]} />
      <meshStandardMaterial
        map={texture}
        transparent
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.7}
        metalness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// --- Orbit Ring Component ---
interface OrbitRingProps { radius: number; tiltX: number; tiltY: number; color: string; }
const OrbitRing: React.FC<OrbitRingProps> = ({ radius, tiltX, tiltY, color }) => {
  const points = useMemo(() => {
    const pts: number[] = [];
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(
        radius * Math.cos(a),
        radius * Math.sin(a) * Math.sin(tiltX),
        radius * Math.sin(a) * Math.cos(tiltY)
      );
    }
    return new Float32Array(pts);
  }, [radius, tiltX, tiltY]);
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.25} linewidth={1} />
    </line>
  );
};

// --- Atom ---
interface AtomProps { isMobile: boolean }
const Atom: React.FC<AtomProps> = ({ isMobile }) => {
  const textures = useLoader(TextureLoader, TECHNOLOGIES.map((t) => logoMap[t]));
  const texMap = useMemo(() => TECHNOLOGIES.reduce((acc, t, i) => { acc[t] = textures[i]; return acc; }, {} as Record<string, THREE.Texture>), [textures]);

  // generate binary pattern texture in organized grid
  const binaryTexture = useMemo(() => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    // background
    ctx.fillStyle = '#1B103F';
    ctx.fillRect(0, 0, size, size);
    // draw grid pattern of bits
    ctx.fillStyle = '#4F46E5';
    ctx.font = '24px monospace';
    const pattern = '1100101011110001';
    const cellSize = 24;
    const cols = Math.floor(size / cellSize);
    const rows = Math.floor(size / cellSize);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const bit = pattern[col % pattern.length];
        const x = col * cellSize;
        const y = row * cellSize + cellSize;
        ctx.fillText(bit, x, y);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }, []);

  const orbitRef = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => { orbitRef.current.rotation.y = clock.elapsedTime * 0.1; });

  const NUCLEUS_RADIUS = 0.5;
  const MIN_ORBIT = NUCLEUS_RADIUS * 1.8;
  const SPACING = 0.25;
  const scale = isMobile ? 0.7 : 2;
  const pos: [number, number, number] = isMobile ? [0, -3, -2.2] : [0, -1, -1.5];

  return (
    <group scale={scale} position={pos}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      {/* Nucleus with binary pattern overlay */}
      <mesh>
        <sphereGeometry args={[NUCLEUS_RADIUS, 32, 32]} />
        <meshStandardMaterial
          map={binaryTexture}
          emissiveMap={binaryTexture}
          emissiveIntensity={0.5}
          roughness={0.9}
          metalness={0.2}
        />
      </mesh>

      {/* Orbits & Electrons */}
      <group ref={orbitRef}>
        {TECHNOLOGIES.map((tech, i) => {
          const r = MIN_ORBIT + i * SPACING;
          if (r < NUCLEUS_RADIUS * 1.5) return null;
          return (
            <group key={tech}>
              <OrbitRing
                radius={r}
                tiltX={Math.random() * Math.PI * 0.5}
                tiltY={Math.random() * Math.PI * 0.5}
                color={ELECTRON_COLORS[i % ELECTRON_COLORS.length]}
              />
              <Electron
                radius={r}
                speed={0.5 + i * 0.05}
                angleOffset={(i * Math.PI) / 6}
                tiltX={Math.random() * Math.PI * 0.5}
                tiltY={Math.random() * Math.PI * 0.5}
                color={ELECTRON_COLORS[i % ELECTRON_COLORS.length]}
                texture={texMap[tech]}
              />
            </group>
          );
        })}
      </group>
    </group>
  );
};

// --- Canvas Wrapper ---
const AtomCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    const update = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  if (isMobile) return null;

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 25 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Atom isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AtomCanvas;