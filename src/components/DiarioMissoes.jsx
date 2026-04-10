const TEMAS = {
  cyan: {
    texto: "text-cyan-400",
    borda: "border-cyan-400",
    fundo: "bg-cyan-400"
  },
  purple: {
    texto: "text-purple-400",
    borda: "border-purple-400",
    fundo: "bg-purple-400"
  }
}

const missoesTrabalho = [
    {
        id:1,
        periodo: "09/2024 - ATUAL",
        titulo: "ANALISTA DE SOFTWARE JUNIOR @ SHOW TECNOLOGIA",
        descricao: "Desenvolvimento de interfaces com React.js. Criação de biblioteca de componentes reutilizáveis em React e TypeScript. Integração front-end com APIs REST (PHP/CodeIgniter) e gestão ágil via Jira.",
        marcado: true
    }
]

const missaoEstudo = [
    {
        id: 1,
        periodo: "2024 - ATUAL",
        titulo: "ENG. DE SOFTWARE @ UNIASSELVI",
        descricao: "A formação une fundamentos técnicos, como programação, banco de dados, arquitetura e segurança da informação, com disciplinas voltadas à engenharia e à gestão de projetos de software. Isso significa ir além do código: entender processos, levantar requisitos, analisar riscos e garantir a qualidade das soluções entregues.",
        marcado: false
    },
    {
        id: 2,
        periodo: "CONCLUÍDO EM 2022",
        titulo: "TÉC. DESENVOLVIMENTO DE SISTEMAS @ ETE ARIANO VILAR SUASSUNA",
        descricao: "Formação técnica intensiva com duração de 1 ano e 6 meses. Inclui Capacitação em Web Design e Desenvolvimento Web pela FACEPE (2021).",
        marcado: true
    },
    {
        id: 3,
        periodo: "CONCLUÍDO EM 2015",
        titulo: "OPERADOR DE COMPUTADORES @ SENAI",
        descricao: "O primeiro contato formal com as máquinas e fundamentos da computação." ,
        marcado: true
    }
]

function ItemMissao({ missao, isultimo, corTema }) {
    const tema = TEMAS[corTema]
    return (
        <div className="flex relative">
            {!isultimo && (
                <div className="absolute top-8 left-[11px] w-[2px] h-full bg-[#333]"></div>
            )}
            <div className="mr-6 z-10 flex flex-col items-center">
                <div className={`w-6 h-6 border-2 bg[#0a0a0a] flex items-center justify-center mt-1 ${tema.borda}`}>
                    {missao.marcado &&(
                        <div className={`w-2 h-2 ${tema.fundo}`}></div>
                    )}
                </div>
            </div>
            <div className="pb-10">
                <span className="text-gray-500 text-xs font-mono mb-1 block"> [{missao.periodo}] </span>
                <h3 className={`font-bold mb-2 uppercase tracking-wide ${tema.texto}`}>
                    {missao.titulo}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{missao.descricao}</p>
            </div>
        </div>
    )
}

function ListaMissoes({ titulo, icone, dados, corTema }) {
  const TEMAS = {
    cyan: { texto: "text-cyan-400", borda: "border-cyan-400", fundo: "bg-cyan-400" },
    purple: { texto: "text-purple-400", borda: "border-purple-400", fundo: "bg-purple-400" }
  }
  const tema = TEMAS[corTema]
  
  return (
    <div>
      <h3 className={`${tema.texto} text-lg font-bold mb-8 uppercase tracking-widest flex items-center gap-2`}>
        <span>{icone}</span> {titulo}
      </h3>
      <div className="w-full pr-0 md:pr-4">
        {dados.map((missao, index) => (
          <ItemMissao key={missao.id} missao={missao} isUltimo={index === dados.length - 1} corTema={corTema} />
        ))}
      </div>
    </div>
  )
}

function PainelInventario() {
  const ferramentas = ["Git", "GitHub", "Bitbucket", "Jira", "Figma", "Postman"]
  const comportamentais = ["Trabalho em Equipe", "Resolução Rápida", "Comunicação", "Metodologia Ágil"]

  return (
    <div className="bg-[#050505] border border-[#222] p-6">
      <h3 className="text-pink-500 font-bold mb-6 uppercase tracking-widest border-b border-[#222] pb-4 text-sm">
        ▣ INVENTÁRIO_DE_EQUIPAMENTOS
      </h3>
      <div className="mb-6">
        <span className="text-gray-500 text-[10px] font-mono mb-3 block">/// FERRAMENTAS_DE_SISTEMA</span>
        <div className="flex flex-wrap gap-2">
          {ferramentas.map(f => <span key={f} className="text-xs text-cyan-400 border border-cyan-400/30 px-2 py-1 bg-cyan-900/10">{f}</span>)}
        </div>
      </div>
      <div>
        <span className="text-gray-500 text-[10px] font-mono mb-3 block">/// ATRIBUTOS_PASSIVOS</span>
        <ul className="space-y-2">
          {comportamentais.map(skill => <li key={skill} className="text-gray-400 text-xs flex items-center gap-2"><span className="text-purple-500">▹</span> {skill}</li>)}
        </ul>
      </div>
    </div>
  )
}

function PainelConquistas() {
  return (
    <div className="bg-[#050505] border border-[#222] p-6 mt-6">
      <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-widest border-b border-[#222] pb-4 text-sm flex items-center gap-2">
        <span>🏆</span> CONQUISTAS_DESBLOQUEADAS
      </h3>
      <div className="flex flex-col gap-1">
        <span className="text-white text-sm font-bold tracking-wider">Web Design & Dev. Web</span>
        <span className="text-gray-500 text-xs font-mono">FACEPE (2021)</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-white text-sm font-bold tracking-wider">Cloud Fullstack Bootcamp Warburg Pincus</span>
        <span className="text-gray-500 text-xs font-mono">DIO - Digital Innovation One (2024)</span>
      </div>
    </div>
  )
}

function PainelTerminal() {
  return (
    <div className="bg-black border border-cyan-900/50 p-4 mt-6 flex-grow font-mono text-[10px] text-cyan-700/60 flex flex-col gap-1">
      <p>{">"} BOOT_SEQUENCE_INITIATED...</p>
      <p>{">"} LOADING_REACT_DOM... [OK]</p>
      <p>{">"} FETCHING_API_ROUTES... [OK]</p>
      <p>{">"} COMPILING_TAILWIND_CLASSES... [OK]</p>
      <p className="mt-4 text-purple-500/50">{"// AVISO: SISTEMA ALTAMENTE ESCALÁVEL DETECTADO"}</p>
      <p className="animate-pulse mt-4 text-cyan-400/80">{">"} WAITING_FOR_USER_COMMAND_</p>
    </div>
  )
}

export default function DiarioMissoes() {
  return (
    <section id="missoes" className="py-16">
      <h2 className="text-cyan-400 text-xl font-bold mb-10 uppercase tracking-widest flex items-center gap-2">
        <span>⏏</span> DIÁRIO_DE_MISSÕES
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col gap-12">
          <ListaMissoes titulo="CAMPANHA_PRINCIPAL (XP)" icone="💼" dados={missoesTrabalho} corTema="cyan" />
          <ListaMissoes titulo="SALA_DE_TREINAMENTO (ACAD.)" icone="🎓" dados={missaoEstudo} corTema="purple" />
        </div>
        <div className="hidden lg:flex flex-col h-full sticky top-24">
          <PainelInventario />
          <PainelConquistas />
          <PainelTerminal />
        </div>

      </div>
    </section>
  )
}