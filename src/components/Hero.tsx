import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Olá! Eu sou <span className="hero-highlight">Igor</span>,<br />
          desenvolvedor web.
        </h1>
        <p className="hero-subtitle">TypeScript | React | Next.js | Tailwind CSS | Git e GitHub | Node.js | Docker</p>
        <br />
        <p className="hero-subtitle">Sou desenvolvedor full stack especializado em React, Node.js e bancos de dados relacionais e não relacionais. Tenho experiência na criação de aplicações web escaláveis, com foco em performance, boas práticas de código e experiência do usuário.</p>
        <button className="hero-contact">Baixe meu Curriculo!</button>
      </div>
    </section>
  );
}
