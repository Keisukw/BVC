import "../styles/button.css";

function Button({texto}) { 
    return (
        <div className="btn">
            <button>{texto}</button>
        </div>
    );
}

export default Button;