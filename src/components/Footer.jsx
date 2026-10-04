import { company } from '../js/company';
import { footerColumns, socials, payments } from '../js/footer.data';
import '../styles/Footer.css';

function FooterLink({ label, href }) {
  return href ? <a href={href}>{label}</a> : <span>{label}</span>;
}

function SocialItem({ label, color, href, icon }) {
  const glyph = icon ? (
    <img src={icon} alt="" />
  ) : (
    <span className="footer__social-fallback" style={{ background: color }} aria-hidden="true">
      {label[0]}
    </span>
  );
  return href ? (
    <a href={href} className="footer__social" aria-label={label} target="_blank" rel="noreferrer">
      {glyph}
    </a>
  ) : (
    <span className="footer__social" role="img" aria-label={label}>
      {glyph}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__row">
          <div className="footer__brand">
            <p className="footer__logo" aria-label={company.name}>
              <span className="footer__logo-bvc">BVC</span>{' '}
              <span className="footer__logo-copy">Copy</span>{' '}
              <span className="footer__logo-house">House</span>
            </p>
            <div className="footer__socials">
              {socials.map((item) => (
                <SocialItem key={item.label} {...item} />
              ))}
            </div>
            <p className="footer__copy">
              © {company.copyrightYear} - {company.name}. Todos os direitos reservados
            </p>
          </div>

          <nav className="footer__nav" aria-label="Rodapé">
            {footerColumns.map((column, i) => (
              <ul key={i}>
                {column.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <hr className="footer__divider" />

        <div className="footer__row">
          <div>
            <h3 className="footer__heading">Horário de Atendimento</h3>
            <p className="footer__small">
              {company.hours.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <h3 className="footer__heading">Formas de pagamento</h3>
            <ul className="footer__payments">
              {payments.map((p) => (
                <li key={p.label}>{p.icon ? <img src={p.icon} alt={p.label} /> : p.label}</li>
              ))}
            </ul>
          </div>
        </div>

        <address className="footer__address footer__small">
          {company.supportTeam}
          <br />
          {company.address}
          <br />
          {company.phones.join(' / ')}
          <br />
          {company.email}
        </address>

        <p className="footer__legal">
          {company.name} - CNPJ {company.cnpj}
        </p>
      </div>
    </footer>
  );
}
