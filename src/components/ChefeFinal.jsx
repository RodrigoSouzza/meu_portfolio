import { useState } from "react"

export default function ChefeFinal() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Dados prontos para o envio:", formData)
        alert(`Transmissão recebida, ${formData.nome}! Entrarei em contato em breve.`)
        setFormData({ nome: "", email: "", mensagem: ""})
    }

    return (

        <section id="terminal" className="pt-16 mt-8 flex flex-col min-h-[80vh] justify-between">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="lg:justify-self-center max-w-md w-full">
                    
                    <h2 className="text-pink-500 text-4xl md:text-5xl font-black mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]">
                        O_CHEFE_FINAL
                    </h2>
                    
                    <p className="text-gray-300 mb-10 leading-relaxed">
                        Pronto para começar uma nova campanha comigo? Envie uma transmissão criptografada para iniciar a sequência da missão.
                    </p>
                </div>

                <div className="bg-[#050505] border border-[#222] flex flex-col shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                    <div className="flex justify-between items-center border-b border-[#222] px-6 py-3 text-purple-400 text-[10px] font-mono tracking-widest uppercase bg-[#0a0a0a]">
                        <span>TRANSMISSION_PROTOCOL: SECURE</span>
                        <span>v2.0.4</span>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-6 md:p-10">
                        <div className="flex flex-col relative">
                            <label className="text-purple-400 text-[10px] font-mono mb-2 uppercase tracking-widest">
                                RÓTULO_DE_IDENTIFICAÇÃO
                            </label>
                            <input 
                                type="text" name="nome" required value={formData.nome} onChange={handleChange}
                                placeholder="DIGITE SEU NOME..."
                                className="bg-transparent border-b-2 border-purple-900/50 p-2 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-700 font-mono" 
                            />                            
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-purple-400 text-[10px] font-mono mb-2 uppercase tracking-widest">
                                ENDEREÇO_DE_FREQUÊNCIA
                            </label>
                            <input 
                                type="email" name="email" required value={formData.email} onChange={handleChange}
                                placeholder="DIGITE SEU EMAIL..."
                                className="bg-transparent border-b-2 border-purple-900/50 p-2 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-700 font-mono" 
                            />
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-purple-400 text-[10px] font-mono mb-2 uppercase tracking-widest">
                                RESUMO_DA_MISSÃO
                            </label>
                            <textarea 
                                name="mensagem" required rows="3" value={formData.mensagem} onChange={handleChange}
                                placeholder="DESCREVA A MISSÃO..."
                                className="bg-transparent border-b-2 border-purple-900/50 p-2 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none placeholder-gray-700 font-mono" 
                            ></textarea>
                        </div>
                        <button type="submit" className="mt-2 bg-[#d8b4fe] hover:bg-[#c084fc] text-black font-black py-4 px-8 text-sm tracking-widest transition-colors w-full uppercase">
                            ENVIAR MISSÃO ▻
                        </button>
                        <div className="flex justify-center gap-2 mt-4">
                            <div className="w-2 h-2 bg-purple-500"></div>
                            <div className="w-2 h-2 bg-cyan-400"></div>
                            <div className="w-2 h-2 bg-pink-500"></div>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="mt-24 border-t border-[#111] pt-8 pb-12 flex flex-col items-center gap-4 text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                <p>© 2026 Rodrigo Souza</p>
                <div className="flex gap-6">
                    <a href="https://github.com/RodrigoSouzza" className="hover:text-cyan-400 transition-colors" target="blank">GITHUB</a>
                    <a href="https://www.linkedin.com/in/rodrigoo-maciell/" className="hover:text-cyan-400 transition-colors" target="blank">LINKEDIN</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">RESUME</a>
                </div>
            </footer>
        </section>
    )
}
