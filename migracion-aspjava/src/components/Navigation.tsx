import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/solicitud">Solicitar Crédito</Link></li>
                    <li><Link to="/creditos-solicitados">Créditos Solicitados</Link></li>
                </ul>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? '❌' : '☰'}
            </button>
        </>
    );
};

export default Navigation;