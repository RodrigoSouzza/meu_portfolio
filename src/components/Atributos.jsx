function CardEstatistica({titulo, valor, corTexto}) {
    return (
        <div className="bg-[#111] p-4 mb-4 border border-[#222]">
            <p className="text-gray-500 text-xs mb-1 font-mono">{titulo}</p>
            <h3 className={`text-2xl md:text-3xl font-bold ${corTexto}`}>
                {valor}
            </h3>
        </div>
    )
}

export default function Atributos() {
    return (
        <section id="status" className="py-16">
            <h2 className="text-cyan-400 text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-2">
                <span>⏏</span> ATRIBUTOS_DO_PERSONAGEM
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-purple-500 pl-6">
                    <h3 className="text-purple-400 text-lg md-4 tracking-widest">BIO_DO_JOGADOR</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        Me chamo Rodrigo, um entusiasta da tecnologia que deu seus primeiros passos no mundo da programação em 2021. Desde então, minha jornada tem sido dedicada a explorar e aprofundar meus conhecimentos em desenvolvimento <span className="text-cyan-400 font bold">front-end.</span>
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Especialista em criar interfaces, com foco em <span className="text-cyan-400 font bold">Javascript, React.js, Next.js, Tailwind CSS e integração de APIs REST.</span>
                    </p>
                </div>

                <div>
                    <CardEstatistica
                    titulo = "anos_de_experiência"
                    valor = "03+"
                    corTexto = "text-purple-400"
                    />
                    <CardEstatistica
                    titulo = "consumo_de_energia"
                    valor = "2.4L café"
                    corTexto = "text-cyan-400"
                    />
                    <CardEstatistica
                    titulo = "fases_concluidas"
                    valor = "142"
                    corTexto = "text-red-400"
                    />
                </div>

            </div>
        </section>
    )
}