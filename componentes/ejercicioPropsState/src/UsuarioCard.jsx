// UsuarioCard.jsx (componente hijo)

import React, { useState } from 'react';

function UsuarioCard({ nombre, ciudad }) {
    const [likes, setLikes] = useState(0);

    const manejarClick = () => {
        setLikes(likes + 1); 
    };

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            margin: '1rem 0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
        }}>
            <p><strong>Nombre:</strong>{nombre}</p>
            <p><strong>Ciudad:</strong>{ciudad}</p>
            <p><strong>Likes:</strong>{likes}</p>
            <button onClick={manejarClick}>Me gusta</button>
        </div>
    );
}

export default UsuarioCard;