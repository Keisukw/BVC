import ServiceCard from './ServiceCard';
import { services } from '../js/services.data';
import '../styles/NossosServicos.css';

export default function NossosServicos() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <div className="services__inner">
        <header className="services__header">
          <h2 id="services-title" className="services__title">
            Nossos <span>Serviços</span>
          </h2>
          <p className="services__lead">
            Soluções completas para você, sua empresa ou seu projeto. Qualidade, agilidade e o
            melhor atendimento.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
