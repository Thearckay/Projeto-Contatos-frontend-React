import React from 'react';

const Waves = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0, 
      zIndex: 0 
    }}>
      <svg
        viewBox="0 0 1440 100" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
            width: '100%',
            height: '100px', 
        }}
      >
        {/* As linhas das ondas (usei um cinza claro pra combinar) */}
        <path d="M0,40 C320,80 420,0 740,40 C1060,80 1160,0 1480,40 L1480,100 L0,100 Z" 
              fill="none" stroke="var(--txtMain)" strokeWidth="2" />
        
        <path d="M0,60 C320,100 420,20 740,60 C1060,100 1160,20 1480,60 L1480,100 L0,100 Z" 
              fill="none" stroke="var(--txtMain)" strokeWidth="2" />
              
        <path d="M0,80 C320,120 420,40 740,80 C1060,120 1160,40 1480,80 L1480,100 L0,100 Z" 
              fill="none" stroke="var(--txtMain)" strokeWidth="2" />
              
        <path d="M0,20 C320,60 420,-20 740,20 C1060,60 1160,-20 1480,20 L1480,100 L0,100 Z" 
              fill="none" stroke="var(--txtMain)" strokeWidth="2" opacity="0.5" />
      </svg>
    </div>
  );
};

export default Waves;