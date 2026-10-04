import "../styles/header.css"
import "../App.css"

function Header() {
    return (
        <header>
            <div className='bg-hero'>
                <img src="./bg-hero.png" alt="background hero" />
            </div>

            <div className="section-hero">

                <div className='hero section'>

                    <h1>Bem-vindo à 
                        <span className="bvc"> BVC</span>
                        <span className="copy"> Copy</span>
                        <span className="house"> House</span></h1>
                    <p>"Loja especializada em impressões rápidas e serviços gráficos de alta qualidade, focada em soluções eficientes para clientes."</p>
                    
                    <div className='redes-sociais'>
                        <a href="#"><img src="./icon-whatsApp.svg" alt="icon whatsapp" /></a>
                        <a href="#"><img src="./icon-instagram.svg" alt="icon instagram" /></a>
                    </div>

                    <form className="pesquisar">
                        <input
                            type="text"
                            placeholder="O que está procurando?"
                        />

                        <button type="submit">
                            <img src="/search-icon.svg" alt="Pesquisar" />
                        </button>
                    </form>

                </div>

            </div>

        </header>
    )
}

export default Header