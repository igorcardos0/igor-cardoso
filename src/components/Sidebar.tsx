import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">J</div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <img src="/nav-icons/home.png" alt="Home" width={32} height={32} style={{marginBottom:8}} />
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <img src="/nav-icons/sobre.png" alt="Sobre" width={32} height={32} style={{marginBottom:8}} />
            </Link>
          </li>
          <li>
            <Link href="/projetos">
              <img src="/nav-icons/projetos.png" alt="Projetos" width={32} height={32} style={{marginBottom:8}} />
            </Link>
          </li>
          <li>
            <Link href="/contatos">
              <img src="/nav-icons/contatos.png" alt="Contatos" width={32} height={32} style={{marginBottom:8}} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-social">
        <a href="#"><span role="img" aria-label="twitter">🐦</span></a>
        <a href="#"><span role="img" aria-label="linkedin">🔗</span></a>
      </div>
    </aside>
  );
}
