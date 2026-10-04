import "../styles/cardProduto.css";

function CardProduto({ imagem, nome, preco, qtd }) {
    return (
        <div className="card-produto">
            <img src={`/${imagem}`} alt=""/>
            <div className="texto">
                <p className="nome">{nome}</p>
                <p className="a-partir">A partir de</p>
                <p className="preco">
                    {preco}<span>R$/{qtd}</span>
                </p>
            </div>
            <div className="btn">
                <button>Comprar</button>
            </div>
            <a href="#">Ver detalhes</a>
        </div>
    )
}

export default CardProduto