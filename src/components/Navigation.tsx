
import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation-creative">
      <ul>
        <li>
          <Link href="/">
            <img src="/nav-icons/home.png" alt="Home" width={32} height={32} style={{ marginRight: 8 }} />
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <img src="/nav-icons/sobre.png" alt="Sobre" width={32} height={32} style={{ marginRight: 8 }} />
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/projetos">
            <img src="/nav-icons/projetos.png" alt="Projetos" width={32} height={32} style={{ marginRight: 8 }} />
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/contatos">
            <img src="/nav-icons/contatos.png" alt="Contatos" width={32} height={32} style={{ marginRight: 8 }} />
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
