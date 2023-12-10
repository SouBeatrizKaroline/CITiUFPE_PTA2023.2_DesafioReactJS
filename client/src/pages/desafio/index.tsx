import React from 'react';
import { Mangue } from "../../assets";
import { LogoCITi2 } from "../../assets";

const DesafioPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          flex: 1,
          padding: '20px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <img src={ LogoCITi2.src }
          style={{
            width: '72px',
            height: '39px',
            background: 'none',
          }}
        />

        <h1
          style={{
            color: 'var(--Gray-800, #1E293B)',
            fontFamily: 'Titillium Web',
            fontSize: '36px',
             fontWeight: '700',
            marginTop: '20px',
          }}
        >
          Acesse a plataforma
        </h1>

        <p
          style={{
            width: '351px',
            color: 'var(--Gray-600, #475569)',
            fontFamily: 'Titillium Web',
            fontSize: '16px',
            fontWeight: '400',
            marginTop: '10px',
            marginBottom: '20px',
          }}
        >
          Faça login ou registre-se para começar a construir seus projetos ainda hoje.
        </p>

            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
            <label htmlFor="email" 
            style={{ 
                color: 'var(--Gray-800, #1E293B)', 
                fontFamily: 'Titillium Web', 
                fontSize: '14px', 
                fontWeight: '600', 
                }}>
                E-mail
            </label>
            <input type="text" id="email" name="email" 
            style={{ 
                width: '384px', 
                height: '53px',
                color: 'var(--Gray-400, #94A3B8)', 
                fontFamily: 'Titillium Web', 
                fontSize: '14px', fontWeight: '400', 
                border: '1px solid var(--Gray-200, #E2E8F0)', 
                }} 
                placeholder="Digite seu e-mail" />

            <a href="" 
            style={{ 
                color: 'var(--Verde-CITi, #51E678)', 
                fontFamily: 'Titillium Web', 
                fontSize: '14px', 
                fontWeight: '600',
                }}>
                <p>Esqueceu a senha?</p>
            </a>

            <label htmlFor="password" style={{ 
                color: 'var(--Gray-800, #1E293B)', 
                fontFamily: 'Titillium Web', 
                fontSize: '14px', 
                fontWeight: '600',
                }}>
                Senha
            </label>
            <input type="password" id="password" name="password" style={{ 
                width: '384px',
                height: '53px',
                flexShrink: 0, color: 'var(--Gray-400, #94A3B8)', 
                fontFamily: 'Titillium Web', 
                fontSize: '14px', 
                fontWeight: '400', 
                border: '1px solid var(--Gray-200, #E2E8F0)',
            }} 
                placeholder="Digite sua senha" />

            <button style={{ 
                display: 'flex', 
                width: '384px', 
                padding: '16px 24px', 
                justifyContent: 'center', 
                alignItems: 'center', gap: '10px', 
                borderRadius: '4px', 
                background: 'var(--Verde-CITi, #51E678)',
                color: '#ffffff',
                border: 'none',
                }}>
                Enter
            </button>
            </form>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: '50%',
          height: '100%',
        }}
      >
        <img
          src={Mangue.src}
          alt="Imagem"
          style={{ 
            width: '100%',
            height: '100%',
        }}
        />
      </div>
    </div>
  );
};

export default DesafioPage;
