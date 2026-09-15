import "../styles/menu.css";

function Menu() {
    return (
        <div className='menu'>
            <img src="./BVClogo.svg" alt="Logo BVC" />
            <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Produtos</a></li>
            <li><a href='#'>Serviços</a></li>
            <li><a href='#'>Sobre nós</a></li>
            <li><a href='#'>Contato</a></li>
            </ul>
        </div>
    )
}

export default Menu