import { useEffect, useState } from "react";

import "../styles/produto.css";
import "../App.css";

import CardProduto from "./cardProduto.jsx";

function Produtos() {
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const produtos = [
        {
            imagem: "item-rev-foto.png",
            nome: "Revelação de Fotos",
            preco: "3,00",
            qtd: "u"
        },
        {
            imagem: "item-curriculo.png",
            nome: "Currículo em PDF",
            preco: "10,00",
            qtd: "u"
        },
        {
            imagem: "item-caneca.png",
            nome: "Canecas Personalizadas",
            preco: "40,00",
            qtd: "u"
        },
        {
            imagem: "item-adesivo.png",
            nome: "Adesivo",
            preco: "8,00",
            qtd: "f"
        },
        {
            imagem: "item-azulejo.png",
            nome: "Azulejo Personalizado",
            preco: "15,00",
            qtd: "u"
        },
        {
            imagem: "item-camisa.png",
            nome: "Estampa em Camisa",
            preco: "35,00",
            qtd: "u"
        },
        {
            imagem: "item-2viaboleto.png",
            nome: "2ª via de boletos",
            preco: "3,00",
            qtd: "u"
        },
        {
            imagem: "item-foto3x4.png",
            nome: "Foto 3X4",
            preco: "15,00",
            qtd: "6u"
        },
        {
            imagem: "item-topodebolo.png",
            nome: "Topo de Bolo",
            preco: "7,00",
            qtd: "u"
        }
    ];

    const [cardsPorPagina, setCardsPorPagina] = useState(
        window.innerWidth <= 768 ? 1 : 3
    );

    useEffect(() => {
        function atualizarCardsPorPagina() {
            setCardsPorPagina(window.innerWidth <= 768 ? 1 : 3);
        }

        window.addEventListener("resize", atualizarCardsPorPagina);

        return () => {
            window.removeEventListener("resize", atualizarCardsPorPagina);
        };
    }, []);

    const totalPaginas = Math.ceil(produtos.length / cardsPorPagina);

    const larguraCard = 360;

    const deslocamento =
        window.innerWidth <= 640
            ? paginaAtual * window.innerWidth
            : paginaAtual * larguraCard * 3;

    function proximaPagina() {
        setPaginaAtual((paginaAtual + 1) % totalPaginas);
    }

    function paginaAnterior() {
        setPaginaAtual(
            (paginaAtual - 1 + totalPaginas) % totalPaginas
        );
    }

    function iniciarToque(event) {
        setTouchStart(event.touches[0].clientX);
    }

    function finalizarToque(event) {
        const touchEnd = event.changedTouches[0].clientX;
        const distancia = touchStart - touchEnd;

        // Ignora movimentos muito pequenos
        if (Math.abs(distancia) < 50) {
            return;
        }

        if (distancia > 0) {
            // Arrastou para a esquerda
            proximaPagina();
        } else {
            // Arrastou para a direita
            paginaAnterior();
        }
    }

    return (
        <div className="section-produtos">
            <div className="produtos section" id="produtos">

                <div className="title">
                    <h2>Top Picks da Semana</h2>
                </div>

                <div className="container"
                    onTouchStart={iniciarToque}
                    onTouchEnd={finalizarToque}
                >

                    <button
                        className="before btn-arrow"
                        onClick={paginaAnterior}
                    >
                        <img src="/arrow-blue.png" alt="Anterior" />
                    </button>

                    <div
                        className="container-produtos"
                        style={{
                            transform: `translateX(-${deslocamento}px)`
                        }}
                    >
                        {produtos.map((produto, index) => (
                            <CardProduto
                                key={index}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                preco={produto.preco}
                                qtd={produto.qtd}
                            />
                        ))}
                    </div>

                    <button
                        className="next btn-arrow"
                        onClick={proximaPagina}
                    >
                        <img src="/arrow-blue.png" alt="Próximo" />
                    </button>

                </div>

                <div className="pontos-indicadores">
                    {Array.from({ length: totalPaginas }).map((_, index) => (
                        <div
                            key={index}
                            className={`elipse ${
                                paginaAtual === index ? "enable" : "disable"
                            }`}
                            onClick={() => setPaginaAtual(index)}
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Produtos;