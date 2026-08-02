import React, { useState } from 'react';
import STVTranslator from '../engine/STVTranslator';
import ThreeJSCanvas from './ThreeJSCanvas';

const STVDashboard = () => {
    const [instruccion, setInstruccion] = useState("");
    const [cargando, setCargando] = useState(false);
    const [estadoEstructural, setEstadoEstructural] = useState(null);

    const handleGenerar = async () => {
        if (!instruccion.trim()) return;
        setCargando(true);

        try {
            const resultado = await STVTranslator(instruccion);
            if (resultado && resultado.parametros) {
                const nuevostate = { ...estadoEstructural, ...resultado.parametros };
                setEstadoEstructural(nuevostate);
                setInstruccion("");
            }
        } catch (error) {
            console.error("Error estructural:", error);
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#F5F5F5] text-black font-mono relative overflow-hidden">
            <header className="border-b border-[#292929] pb-3 mb-2 flex justify-between items-end p-4">
                <div>
                    <h1 className="text-2xl font-black tracking-widest uppercase">STV ATTENTION ENGINE</h1>
                    <p className="text-xs text-[#00E5FF]">COGNITIVE STRUCTURAL INTELLIGENCE V2.0</p>
                </div>
            </header>

            {/* Lienzo 3D */}
            <div className="w-full h-[50vh] border-b border-black shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <ThreeJSCanvas estadoEstructural={estadoEstructural} />
            </div>

            {/* Consola de Entrada */}
            <div className="flex-1 flex flex-col p-4 bg-[#fafafa]">
                <div className="flex gap-2 mt-auto">
                    <input
                        type="text"
                        className="flex-1 border border-black p-2 outline-none bg-transparent"
                        placeholder="Genera una estructura..."
                        value={instruccion}
                        onChange={(e) => setInstruccion(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerar()}
                    />
                    <button
                        onClick={handleGenerar}
                        disabled={cargando}
                        className="bg-black text-white px-4 py-2 font-bold uppercase disabled:bg-gray-400"
                    >
                        {cargando ? 'Sintetizando...' : 'Sintetizar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default STVDashboard;