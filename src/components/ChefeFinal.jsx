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

        console.log("Dados prontos para o envio: formData")
        alert(`Mensagem recebida, ${formData.nome}! Entrarei em contato em breve.`)

        setFormData({ nome: "", email: "", mensagem: ""})
    }

    return (
        <section className="py-16 border-t border-[#222] mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-pink-500 text-3xl font-black mb-6 tracking-wider">
                        O_CHEFE_FINAL
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Pronto para começar uma nova campanha juntos? Envie uma transmissão criptografada para iniciar a sequência da missão.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-400">
                            <span className="text-pink-500">📧</span>
                            <span>contato.rodrigoom@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-400">
                            <span className="text-pink-500">📱</span>
                            <span>(87) 99940-7568</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#050505] p-6 md:p-8 border border-[#222]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-500 text-xs font-mono mb-2 uppercase">Nome_do_Jogador</label>
                            <input 
                                type="text"
                                name="nome"
                                required
                                value={formData.nome}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 p-2 text-white focus:outline-none focus:border-pink-500 trasition-colors" 
                                />                            
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-500 text-xs font-mono mb-2 uppercase">Email_de_Contato</label>
                            <input 
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 p-2 text-white focus:outline focus:border-pink-500 transition-colors"
                                />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-500 text-xs font-mono mb-2 uppercase">Mensagem_Sistema</label>
                            <textarea 
                                name="mensagem"
                                required
                                rows="4"
                                value={formData.mensagem}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 p-2 text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-8 text-sm tracking-widest transition-colors w-full uppercase">
                                Enviar Mensagem &gt;
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
