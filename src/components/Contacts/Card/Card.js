import React from 'react';

import './Card.scss';

export const Card = () => {
    return (
        <div className="Card">
            <img src="https://picsum.photos/200/200" />

            <div className="info">
                <h3>Robert Fox</h3>
                <label>+525620192588</label>
                <p>
                    Hola me interesa ponerme en contacto contigo. Me interesaron
                    tus servicios y quisiera contratarte.
                </p>
            </div>
        </div>
    );
};
