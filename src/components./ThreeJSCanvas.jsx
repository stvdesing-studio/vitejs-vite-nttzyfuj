import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Grid } from '@react-three/drei';

const ThreeJSCanvas = ({ estadoEstructural }) => {
    
    // ESTADO VACÍO
    if (!estadoEstructural) {
        return (
            <div className="w-full h-full bg-[#050505] relative">
                <div className="absolute top-4 left-4 z-10 text-[#00E5FF] font-mono text-xs p-2 border border-[#00E5FF]">
                    STV GRAVITY OS // VOID ENVIRONMENT
                </div>
                <Canvas camera={{ position: [10, 10, 15], fov: 40 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} />
                    <OrbitControls makeDefault />
                    <Grid infiniteGrid fadeDistance={50} sectionColor="#00E5FF" cellColor="#333333" position={[0, -0.5, 0]} />
                </Canvas>
            </div>
        );
    }

    // ESTADO ESTRUCTURAL GENERADO
    return (
        <div className="w-full h-full bg-[#e5e5e5] relative">
             <div className="absolute top-4 left-4 z-10 text-black font-mono text-xs bg-white/80 p-2 border border-black">
                STV STRUCTURAL ENGINE // HSS RENDER ACTIVO
            </div>
            
            <Canvas camera={{ position: [8, 6, 12], fov: 40 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
                <OrbitControls makeDefault />
                <Grid infiniteGrid fadeDistance={50} sectionColor="#000000" cellColor="#999999" position={[0, -estadoEstructural.alturaColumna, 0]} />

                {estadoEstructural.tipo === 'estructura' && (
                    <group position={[0, 0, 0]}>
                        
                        {/* VIGA PRINCIPAL HSS */}
                        <Box args={[estadoEstructural.longitud, estadoEstructural.alto, estadoEstructural.ancho]} position={[0, 0, 0]}>
                            <meshStandardMaterial color={estadoEstructural.colorPrincipal} metalness={0.8} roughness={0.2} />
                        </Box>
                        
                        {/* 4 COLUMNAS HSS DE SOPORTE (Basadas en la altura definida) */}
                        <Box args={[0.2, estadoEstructural.alturaColumna, 0.2]} position={[-estadoEstructural.longitud/2 + 0.2, -estadoEstructural.alturaColumna/2, estadoEstructural.ancho/2]}>
                             <meshStandardMaterial color={estadoEstructural.colorColumnas} metalness={0.7} roughness={0.3}/>
                        </Box>
                        <Box args={[0.2, estadoEstructural.alturaColumna, 0.2]} position={[-estadoEstructural.longitud/2 + 0.2, -estadoEstructural.alturaColumna/2, -estadoEstructural.ancho/2]}>
                             <meshStandardMaterial color={estadoEstructural.colorColumnas} metalness={0.7} roughness={0.3}/>
                        </Box>
                        <Box args={[0.2, estadoEstructural.alturaColumna, 0.2]} position={[estadoEstructural.longitud/2 - 0.2, -estadoEstructural.alturaColumna/2, estadoEstructural.ancho/2]}>
                             <meshStandardMaterial color={estadoEstructural.colorColumnas} metalness={0.7} roughness={0.3}/>
                        </Box>
                        <Box args={[0.2, estadoEstructural.alturaColumna, 0.2]} position={[estadoEstructural.longitud/2 - 0.2, -estadoEstructural.alturaColumna/2, -estadoEstructural.ancho/2]}>
                             <meshStandardMaterial color={estadoEstructural.colorColumnas} metalness={0.7} roughness={0.3}/>
                        </Box>
                        
                    </group>
                )}
            </Canvas>
        </div>
    );
};

export default ThreeJSCanvas;