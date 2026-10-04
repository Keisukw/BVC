import "../styles/cardProduto.css";
import Button from "./button";

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
            <Button 
                texto="Comprar"
            />
            <a href="#">Ver detalhes</a>
        </div>
    )
}

export default CardProduto