import avatar from '../assets/perfil.png'

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center py-16 text-center">
            <h2 className="text-cyan-400 text-xs md:text-sm tracking-[0.3em] mb-4 animate-pulse">
                APERTE START PARA COMEÇAR
            </h2>

            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">
                RODRIGO_<span className="text-purple-500">SOUZA</span>
            </h1>

            <div className="border-2 border-cyan-400 p-1 mb-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <img 
                src={avatar}
                alt="Avatar do Rodrigo" 
                className="w-40 h-40 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <h2 className="text-gray-400 text-xs md:text-sm tracking-[0.3em] mb-4">
                Desenvolvedor front-end multidisciplinar especializado <br /> na construção de interfaces digitais <br /> de alta fidelidade dentro do ecossistema web.
            </h2>

            <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-8 text-sm tracking-widest transition-colors shadow-[0_0__15px_rgba(168,85,247,0.4)]">
                START GAME ▶
            </button>
        </section>
    );
}
