import "../styles/header.css"

function Header() {
    return (
        <header>
            <div className='bg-hero'>
            <img src="./bg-hero.png" alt="background hero" />
            </div>

            <div className='hero'>

            <h1>Bem-vindo à BVC Copy House</h1>
            <p>"Loja especializada em impressões rápidas e serviços gráficos de alta qualidade, focada em soluções eficientes para clientes."</p>
            
            <div className='redes-sociais'>
                <a href="#"><img src="./icon-whatsApp.svg" alt="icon whatsapp" /></a>
                <a href="#"><img src="./icon-instagram.svg" alt="icon instagram" /></a>
            </div>

            <div className='pesquisar'>
                <input type="text" placeholder='O que está procurando?' />
                <img src="./search-icon.svg" alt="Pesquisar" />
            </div>

            </div>
        </header>
    )
}

export default Header