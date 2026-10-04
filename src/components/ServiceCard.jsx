import Button from './button';
import ServiceIcon from './ServiceIcon';

/**
 * Card de serviço, sem dependências de roteamento.
 *
 * Destino do "Saiba mais" (use um dos dois, conforme a navegação do projeto):
 *  - href:    link comum (<a href>), ex.: "#impressao" ou "/impressao.html"
 *  - onClick: função, para navegação controlada por estado/callback
 * Sem nenhum dos dois, o botão aparece desabilitado e nada quebra.
 */
export default function ServiceCard({ title, description, tone, icon, image }) {

  return (
    <article className={`service-card service-card--${tone}`}>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">{description}</p>
      </div>
      <div className="service-card__art">
        {image ? <img src={image} alt="" loading="lazy" /> : <ServiceIcon name={icon} />}
      </div>
    </article>
  );
}
