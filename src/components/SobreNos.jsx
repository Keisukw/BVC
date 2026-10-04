import '../styles/SobreNos.css';
import Button from './button';

/**
 * Seção "Sobre nós" da home. Sem dependências além do React.
 *
 * Props:
 *  - image:   foto real da BVC (import ou URL). Sem ela, aparece um bloco neutro com a mesma proporção.
 *  - imageAlt: descrição da foto.
 *  - href:    destino do botão "Conheça a BVC" (ex.: "#sobre" ou "/sobre.html"), no padrão de navegação do projeto.
 *  - onClick: alternativa ao href, se a navegação do projeto for por estado/callback.
 */
export default function SobreNos({
  image = './bvc-foto-da-loja.jpeg',
  imageAlt = 'Equipe e estrutura da BVC Copy House'
}) {
  const cta = 'Conheça a BVC';

  return (
    <section className="about" id="sobre-nos" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__content">
          <h2 id="about-title" className="about__title">
            Sobre nós
          </h2>
          <p className="about__text">
            A BVC Copy House é uma gráfica que também cuida da parte digital: impressão, cópias,
            encadernação, produtos personalizados e serviços de informática.
          </p>
          <p className="about__text">
            Nossa proposta é simples: atendimento ágil e resultado confiável, do documento do dia
            a dia ao projeto completo.
          </p>
          <Button 
            texto="Conheça a BVC"
          />
        </div>

        <figure className="about__media">
          {image ? (
            <img src={image} alt={imageAlt} loading="lazy" />
          ) : (
            <div className="about__placeholder" role="img" aria-label="Espaço reservado para a foto da BVC" />
          )}
        </figure>
      </div>
    </section>
  );
}
