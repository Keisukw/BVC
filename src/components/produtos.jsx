import { useEffect, useRef, useState } from "react";

import "../styles/produto.css";
import "../App.css";

import CardProduto from "./cardProduto.jsx";

// Mesmos breakpoints do CSS (max-width: 640px) e (max-width: 1024px)
function calcularCardsPorPagina() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function Produtos() {
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [cardsPorPagina, setCardsPorPagina] = useState(calcularCardsPorPagina);

    const cardsPorPaginaRef = useRef(cardsPorPagina);

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

    useEffect(() => {
        function atualizarCardsPorPagina() {
            const quantidade = calcularCardsPorPagina();

            if (quantidade === cardsPorPaginaRef.current) {
                return;
            }

            cardsPorPaginaRef.current = quantidade;
            setCardsPorPagina(quantidade);
            setPaginaAtual(0);
        }

        window.addEventListener("resize", atualizarCardsPorPagina);

        return () => {
            window.removeEventListener("resize", atualizarCardsPorPagina);
        };
    }, []);

    const totalPaginas = Math.ceil(produtos.length / cardsPorPagina);

    // Garante que a página nunca fique fora do intervalo durante uma troca de breakpoint
    const pagina = Math.min(paginaAtual, totalPaginas - 1);

    // O trilho (.container-produtos) mede (total / cardsPorPagina) vezes a área visível,
    // então uma página equivale a (cardsPorPagina / total) da largura do próprio trilho.
    // Em porcentagem, o deslocamento acompanha a largura real, em qualquer resolução.
    const deslocamento = (pagina * cardsPorPagina * 100) / produtos.length;

    function proximaPagina() {
        setPaginaAtual((atual) => (atual + 1) % totalPaginas);
    }

    function paginaAnterior() {
        setPaginaAtual((atual) => (atual - 1 + totalPaginas) % totalPaginas);
    }

    function iniciarToque(event) {
        setTouchStart(event.touches[0].clientX);
    }

    function finalizarToque(event) {
        const touchEnd = event.changedTouches[0].clientX;
        const distancia = touchStart - touchEnd;

        if (Math.abs(distancia) < 50) {
            return;
        }

        if (distancia > 0) {
            proximaPagina();
        } else {
            paginaAnterior();
        }
    }

    return (
        <div className="section-produtos">
            <div className="produtos" id="produtos">

                <div className="title">
                    <h2>Top Picks da Semana</h2>
                </div>

                <div
                    className="container"
                    style={{
                        "--cards": cardsPorPagina,
                        "--total": produtos.length
                    }}
                    onTouchStart={iniciarToque}
                    onTouchEnd={finalizarToque}
                >
                    <button
                        className="before btn-arrow"
                        onClick={paginaAnterior}
                        aria-label="Página anterior"
                    >
                        <img src="/arrow-blue.png" alt="" />
                    </button>

                    <div className="area-visivel">
                        <div
                            className="container-produtos"
                            style={{
                                transform: `translateX(-${deslocamento}%)`
                            }}
                        >
                            {produtos.map((produto, index) => (
                                <div className="slide-produto" key={index}>
                                    <CardProduto
                                        imagem={produto.imagem}
                                        nome={produto.nome}
                                        preco={produto.preco}
                                        qtd={produto.qtd}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="next btn-arrow"
                        onClick={proximaPagina}
                        aria-label="Próxima página"
                    >
                        <img src="/arrow-blue.png" alt="" />
                    </button>
                </div>

                <div className="pontos-indicadores">
                    {Array.from({ length: totalPaginas }).map((_, index) => (
                        <div
                            key={index}
                            className={`elipse ${
                                pagina === index ? "enable" : "disable"
                            }`}
                            onClick={() => setPaginaAtual(index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Produtos;