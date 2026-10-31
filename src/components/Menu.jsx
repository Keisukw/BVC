import { useState } from "react";
import "../styles/menu.css";

function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);

    function abrirMenu() {
        setMenuAberto(true);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <>
            <div className="menu">
                <img src="./BVClogo.svg" alt="Logo BVC" />
                <ul>
                <li><a href='#' className="active">Home</a></li>
                <li><a href='#'>Produtos</a></li>
                <li><a href='#'>Serviços</a></li>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Contato</a></li>
                </ul>

                <button
                    className="menu-hamburguer"
                    onClick={abrirMenu}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Fundo escuro */}
                <div
                    className={`menu-overlay ${menuAberto ? "aberto" : ""}`}
                    onClick={fecharMenu}
                ></div>

                {/* Menu lateral */}
                <aside className={`menu-mobile ${menuAberto ? "aberto" : ""}`}>
                    <div className="menu-mobile-header">

                        <button
                            className="menu-fechar"
                            onClick={fecharMenu}
                            aria-label="Fechar menu"
                        >
                            &times;
                        </button>
                    </div>

                    <nav>
                        <a href="#" className="active" onClick={fecharMenu}>
                            Home
                        </a>

                        <a href="#" onClick={fecharMenu}>
                            Produtos
                        </a>

                        <a href="#" onClick={fecharMenu}>
                            Serviços
                        </a>

                        <a href="#" onClick={fecharMenu}>
                            Sobre nós
                        </a>

                        <a href="#" onClick={fecharMenu}>
                            Contato
                        </a>
                    </nav>
                </aside>
        </>
    )
}

export default Menu