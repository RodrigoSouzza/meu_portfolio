const projetos = [
    {
        id: 1,
        titulo: "PROJETO_MODULA",
        descricao: "Um sistema de gestão de módulos dinâmicos criado para resolver fluxos intensos de dados.",
        techs: ["REACT", "NODE", "SQL"],
        imagem: "https://via.placeholder.com/400x200/222/555?text=PROJETO_MODULA"
   },
  {
    id: 2,
    titulo: "API_DOC_MONITOR",
    descricao: "Monitoramento em tempo real de requisições de API com painel de métricas analíticas.",
    techs: ["NODE.JS", "EXPRESS", "REDIS"],
    imagem: "https://via.placeholder.com/400x200/222/555?text=API_MONITOR"
  },
  {
    id: 3,
    titulo: "SISTEMA_TERMINAL",
    descricao: "Interface de linha de comando baseada em web para administração rápida de servidores.",
    techs: ["REACT", "TAILWIND", "BASH"],
    imagem: "https://via.placeholder.com/400x200/222/555?text=TERMINAL"
  }
]

function TagTech({nome}) {
    return (
        <span className="text-[10px] text-cyan-400 border border-cyan-400/50 px-2 py-1 uppercase tracking-widest bg-cyan-900/20">
            {nome}
        </span>
    )
}

function CardProjeto({projeto}) {
    return (
        <div className="bg-[#111] border border-[#333] hover:border-cyan-400 transition-colors duration-300 flex flex-col h-full">
            <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-32 md:h-40 object-cover opacity-70" />
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-white font-bold tracking-wider mb-2">{projeto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow"> {projeto.descricao}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {projeto.techs.map((tech, index) => (
                        <TagTech key={index} nome={tech} />
                    ))}
                </div>
                <button className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-2 text-xs tracking-[0.2em uppercase trasition all">
                    Visitar_link
                </button>
            </div>
        </div>
    )
}

export default function SelecaoNivel() {
    return (
        <section className="py-16">
            <h2 className="text-cyan-400 text-xl font-bold mb-10 uppercase tracking-widest flex item-center gap-2">
                <span>▣</span> SELEÇÃO_DE_NÍVEL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.map((proj) => (
                    <CardProjeto key={proj.id} projeto={proj} />
                ))}
            </div>
    </section>
  );
}