import { useState, useEffect } from 'react';

export default function TelaCarregamento({ onComplete }) {
  const [progresso, setProgresso] = useState(0)
  const [textoLog, setTextoLog] = useState("INICIALIZANDO_SISTEMA...")

  useEffect(() => {
    const relogio = setInterval(() => {
      setProgresso((prev) => {
        if (prev >= 100) {
          clearInterval(relogio)
          setTimeout(() => onComplete(), 500) 
          return 100
        }
        const novoProgresso = prev + 1;
        if (novoProgresso === 30) setTextoLog("CARREGANDO_INTERFACE_GRÁFICA...")
        if (novoProgresso === 60) setTextoLog("DESCRIPTOGRAFANDO_DADOS_DO_JOGADOR...")
        if (novoProgresso === 90) setTextoLog("ACESSO_CONCEDIDO.")

        return novoProgresso
      });
    }, 70);
    return () => clearInterval(relogio)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center font-mono px-6">
      <h1 className="text-pink-500 text-3xl md:text-5xl font-black tracking-widest mb-12 animate-pulse">
        RODRIGO_OS <span className="text-sm">v1.0</span>
      </h1>

      <div className="w-full max-w-md flex flex-col gap-2">
        <div className="flex justify-between text-cyan-400 text-xs md:text-sm tracking-widest">
          <span>{">"} {textoLog}</span>
          <span>{progresso}%</span>
        </div>
        <div className="w-full h-1 bg-[#222] overflow-hidden">
          <div 
            className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
      </div>
      
    </div>
  )
}