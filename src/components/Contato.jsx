import { useState } from 'react';
import Button from './button';
import { company } from '../js/company';
import '../styles/Contato.css';

/**
 * Seção "Fale Conosco". Sem dependências além do React.
 *
 * Props:
 *  - backgroundImage: foto de fundo (import ou URL). Sem ela, usa um fundo escuro neutro.
 *  - onSubmit({ nome, mensagem }): chamado ao enviar. Se não for passado, abre o app de
 *    e-mail do visitante (mailto) com a mensagem pronta, sem precisar de backend.
 */
export default function Contato({ backgroundImage, onSubmit }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({ nome, mensagem });
      return;
    }
    const subject = encodeURIComponent(`Contato pelo site - ${nome}`);
    const body = encodeURIComponent(`${mensagem}\n\n${nome}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setNome('');
    setMensagem('');
  };

  const style = backgroundImage ? { '--contact-bg': `url(${backgroundImage})` } : undefined;

  return (
    <section className="contact" id="contato" aria-labelledby="contact-title" style={style}>
      <div className="contact__inner">
        <div className="contact__info">
          <h2 id="contact-title" className="contact__title">
            Fale Conosco
          </h2>
          <p className="contact__text">
            Prezado(a) Cliente,
            <br />
            Seja bem-vindo(a) à área de suporte ao cliente da BVC Copy House.
          </p>
          <p className="contact__text">
            Estamos aqui para ajudá-lo(a) a resolver qualquer dúvida. Nosso objetivo é garantir
            sua satisfação e oferecer a melhor experiência possível.
          </p>
          <p className="contact__text">
            Ao enviar sua consulta, por favor, inclua o máximo de informações possíveis para que
            possamos fornecer uma resposta precisa e rápida.
          </p>

          <address className="contact__address">
            <strong>{company.supportTeam}</strong>
            <span>{company.address}</span>
            <span>{company.phones.join(' / ')}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} onReset={handleReset}>
          <label className="contact__label" htmlFor="contact-name">
            Seu nome
          </label>
          <input
            id="contact-name"
            name="nome"
            type="text"
            className="contact__field"
            autoComplete="name"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label className="contact__label" htmlFor="contact-message">
            Mensagem
          </label>
          <textarea
            id="contact-message"
            name="mensagem"
            className="contact__field contact__field--area"
            rows={6}
            required
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <div className="contact__actions">
            <Button texto="Enviar"></Button>
            <Button texto="Cancelar"></Button>
          </div>
        </form>
      </div>
    </section>
  );
}
