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

function ListaMissoes({titulo, icone, dados, corTema}) {
    const tema = TEMAS[corTema]
    return (
        <div>
            <h3 className={`${tema.texto} text-lg font-bold mb-8 uppercase tracking-widest flex items-center gap-2`}>
                <span>{icone}</span> {titulo}
            </h3>
            <div className="max-w-md">
                {dados.map((missao, index) => (
                    <ItemMissao
                    key={missao.id}
                    missao={missao}
                    isUltimo={index ===dados.length -1}
                    corTema={corTema}
                    />
                ))}
            </div>
        </div>
    )
}

export default function DiarioMissoes() {
    return (
        <section className="py-16">
            <h2 className="text-cyan-400 text-xl font-bold mb-10 uppercase tracking-widest flex item-center gap-2">
                <span>💾</span> DIÁRIO_DE_MISSÕES
            </h2>

            <div className="grid grid-cols-1 mid:grid-cols-2 gap-12 md:gap-8">
                <ListaMissoes
                titulo="CAMPANHA_PRINCIPAL (XP)"
                icone= "💼"
                dados= {missoesTrabalho}
                corTema= "cyan"
                />

                <ListaMissoes
                titulo= "SALA_DE_TREINAMENTO (ACAD.)"
                icone= "🎓"
                dados={missaoEstudo}
                corTema= "purple"
                />
            </div>
        </section>
    )
}