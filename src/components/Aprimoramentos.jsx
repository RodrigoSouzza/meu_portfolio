const habilidades = [
  { id: 1, nome: "JAVASCRIPT", nivel: "80%", cor: "bg-cyan-400" },
  { id: 2, nome: "HTML5", nivel: "90%", cor: "bg-purple-500" },
  { id: 3, nome: "CSS3", nivel: "90%", cor: "bg-purple-500" },
  { id: 4, nome: "NODE.JS", nivel: "60%", cor: "bg-cyan-400" },
  { id: 5, nome: "REACT.JS", nivel: "75%", cor: "bg-cyan-400" },
  { id: 6, nome: "NEXT.JS", nivel: "65%", cor: "bg-purple-500" },
  { id: 7, nome: "TYPESCRIPT", nivel: "70%", cor: "bg-purple-500" },
  { id: 8, nome: "APIs REST", nivel: "70%", cor: "bg-cyan-400" },
];

function BarraProgresso({ nome, nivel, cor }) {
  return (
    <div id="melhorias" className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm tracking-widest font-mono uppercase">{nome}</span>
        <span className="text-cyan-400 text-sm font-bold">{nivel}</span>
      </div>
      <div className="w-full bg-[#111] h-3 border border-[#333]">
        <div 
          className={`h-full ${cor} transition-all duration-1000 ease-out`}
          style={{ width: nivel }} 
        ></div>
      </div>
    </div>
  );
}

export default function Aprimoramentos() {
  return (
    <section className="py-16">
      <h2 className="text-cyan-400 text-xl font-bold mb-10 uppercase tracking-widest flex items-center gap-2">
        <span>⏏</span> APRIMORAMENTOS_DO_SISTEMA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {habilidades.map((habilidade) => (
          <BarraProgresso 
            key={habilidade.id} 
            nome={habilidade.nome} 
            nivel={habilidade.nivel}
            cor={habilidade.cor}
          />
        ))}

      </div>
    </section>
  );
}