import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../UI/Loader/Loader";

const Computers = ({ isMobile }) => {
  // 獲取模型
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // 模型設定
    <mesh>
      {/* 燈光設定 */}
      <hemisphereLight intensity={0.8} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        // 調整大小
        scale={isMobile ? 0.7 : 0.75}
        // 調整位置
        position={isMobile ? [0, -1, -2.5] : [2, -1.6, -0.8]}
        // 調整角度
        rotation={isMobile ? [0, .3, 0] : [0, .3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 螢幕尺寸變化監聽
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // 設定初始值
    setIsMobile(mediaQuery.matches);
    // 檢查是否匹配
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // 新增回調函數作為尺寸變動的監聽
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // 下次執行時先清空監聽
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;