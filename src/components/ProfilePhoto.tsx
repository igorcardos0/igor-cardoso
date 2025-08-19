import React from 'react';

export default function ProfilePhoto() {
  return (
    <div className="profile-photo-card">
      <img 
        src="/papillon.png" 
        alt="Foto de perfil" 
        className="profile-img hidden md:block" // escondido no mobile
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: '635px',
          height: '600px',
          borderRadius: '32px',
          objectFit: 'cover',
          boxShadow: '0 4px 32px #0006',
          display: 'block',
          margin: '0 auto',
          transform: 'translateX(-150px)' // move 150px pra esquerda
        }}
      />
      <div className="profile-info">
      </div>
    </div>
  );
}
