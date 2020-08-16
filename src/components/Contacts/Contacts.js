import React from 'react';
import { Card } from './Card/Card';

import './Contacts.scss';

export const Contacts = () => {
    //* Es recomendable asignar componentes mas pequeños a nuestors
    //* componentes principales en caso de que el HTML llegue a ser muy
    //* extenso para poder tener una mejor visibilidad de nuestro codigo
    //* y poder obtener un mejor control.
    return (
        <div className="Contacts">
            <input placeholder="Search..." />

            <div className="buttons">
                <button>
                    <i class="fas fa-plus"></i>
                </button>
                <button>
                    <i class="fas fa-user-plus"></i>
                </button>
            </div>

            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
