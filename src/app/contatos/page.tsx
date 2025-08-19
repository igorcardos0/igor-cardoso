


export default function Contatos() {
  return (
    <main className="contato-main">
      <div className="contato-header">
        <span className="contato-title">Vamos conversar</span>
        <h1 className="contato-heading">Entre em Contato</h1>
      </div>
      <div className="contato-wrapper">
        <div className="contato-info">
          <h2 className="contato-info-heading">Pronto para transformar suas ideias em realidade?</h2>
          <p className="contato-info-text">
            Estou aqui para ajudar você a criar soluções digitais que impulsionam o crescimento do seu negócio. Entre em contato para discutirmos suas necessidades e como podemos alcançar seus objetivos juntos.
          </p>
          <div className="contato-info-dados">
            <span className="contato-info-label">Contate-me</span>
            <div className="contato-info-item">
              <span className="contato-info-icon">✉️</span>
              <span>Email: contato@rmdeveloper.com.br</span>
            </div>
            <div className="contato-info-item">
              <span className="contato-info-icon">📍</span>
              <span>Localização: Itajaí, Santa Catarina - Brasil</span>
            </div>
          </div>
          <div className="contato-social">
            <span className="contato-social-label">Redes Sociais:</span>
            <span className="contato-social-icons">
              <a href="#" title="GitHub"><span style={{fontSize:24}}>🐙</span></a>
              <a href="#" title="LinkedIn"><span style={{fontSize:24}}>🔗</span></a>
              <a href="#" title="TikTok"><span style={{fontSize:24}}>🎵</span></a>
              <a href="#" title="Instagram"><span style={{fontSize:24}}>📸</span></a>
            </span>
          </div>
        </div>
        <form className="contato-form">
          <h3 className="contato-form-heading">Envie sua mensagem</h3>
          <label>Nome*</label>
          <input type="text" required />
          <label>WhatsApp*</label>
          <input type="text" required />
          <label>E-mail*</label>
          <input type="email" required />
          <label>Empresa (Opcional)</label>
          <input type="text" />
          <label>Mensagem*</label>
          <textarea required rows={4} placeholder="Descreva um pouco do seu projeto..." />
          <button type="submit">Enviar Mensagem</button>
        </form>
        <div className="contato-foto">
          <img src="/profile.png" alt="Foto de perfil" className="contato-profile-img" />
        </div>
      </div>
      <footer className="contato-footer">
        Todos os direitos reservados<br />
        Desenvolvido <a href="#">Ricardo Moura | Dev.</a>
      </footer>
    </main>
  );
}
