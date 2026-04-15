import mataMosquito from "../assets/jogo-mata-mosquito.png"
import profileLinks from "../assets/agregador-links.png"
import jogoMemoria from "../assets/jogo-memoria.png"

const projetos = [
  {
    id: 1,
    titulo: "GAME_MATA_MOSQUITO",
    descricao: "Jogo interativo focado em testar os reflexos do usuário, utilizando manipulação do DOM e lógica de tempo em JavaScript.",
    techs: ["JAVASCRIPT", "HTML5", "CSS3"],
    imagem: mataMosquito,
    github: "https://github.com/RodrigoSouzza/Game-Mata-Mosquito",
    demo: "https://rodrigosouzza.github.io/Game-Mata-Mosquito/"
  },
  {
    id: 2,
    titulo: "PROFILE_LINKS_HUB",
    descricao: "Um hub centralizado e responsivo para links sociais e de contato, construído com foco total na estilização, UI/UX e performance mobile.",
    techs: ["JAVASCRIPT", "HTML5", "CSS3"],
    imagem: profileLinks,
    github: "https://github.com/RodrigoSouzza/Profile-links",
    demo: "https://rodrigosouzza.github.io/Profile-links/"
  },
  {
    id: 3,
    titulo: "JOGO_DA_MEMÓRIA",
    descricao: "O clássico jogo da memória refeito. Focado no gerenciamento de estados temporários, embaralhamento de arrays e interações dinâmicas.",
    techs: ["JAVASCRIPT", "HTML5", "CSS3"],
    imagem: jogoMemoria,
    github: "https://github.com/RodrigoSouzza/jogo_memoria",
    demo: "https://rodrigosouzza.github.io/jogo_memoria/"
  }
];

function TagTech({ nome }) {
  return (
    <span className="text-[10px] text-cyan-400 border border-cyan-400/50 px-2 py-1 uppercase tracking-widest bg-cyan-900/20">
      {nome}
    </span>
  );
}

function CardProjeto({ projeto }) {
  return (
    <div className="bg-[#111] border border-[#333] hover:border-cyan-400 transition-colors duration-300 flex flex-col h-full group">
      <div className="overflow-hidden border-b border-[#333] group-hover:border-cyan-400 transition-colors">
        <img 
          src={projeto.imagem} 
          alt={projeto.titulo} 
          className="w-full h-32 md:h-40 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold tracking-wider mb-2">{projeto.titulo}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{projeto.descricao}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {projeto.techs.map((tech, index) => (
            <TagTech key={index} nome={tech} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <a 
            href={projeto.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-2 text-xs text-center tracking-[0.2em] uppercase transition-all"
          >
            {`{ CÓDIGO }`}
          </a>
          <a 
            href={projeto.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-500 text-white hover:bg-purple-400 py-2 text-xs text-center tracking-[0.2em] uppercase transition-all"
          >
            LIVE DEMO ▻
          </a>
        </div>

      </div>
    </div>
  );
}

export default function SelecaoNivel() {
  return (
    <section id="missoes" className="py-16">
      <h2 className="text-cyan-400 text-xl font-bold mb-10 uppercase tracking-widest flex items-center gap-2">
        <span>⏏</span> SELEÇÃO_DE_NÍVEL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((proj) => (
          <CardProjeto key={proj.id} projeto={proj} />
        ))}
      </div>
    </section>
  );
}