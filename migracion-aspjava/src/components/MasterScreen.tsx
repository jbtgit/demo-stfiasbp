import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import CreditosSolicitados from './CreditosSolicitados';
import '../css/styles.css';
import SolicitarCredito from './Solicitud';

const MasterScreen: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div className={`container ${isOpen ? 'open' : ''}`}>
                <Navigation />
                <div className="content">
                    <Routes>
                        <Route path="/solicitud" Component={SolicitarCredito} />
                        <Route path="/creditos-solicitados" Component={CreditosSolicitados} />
                        <Route path="/" Component={CreditosSolicitados} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default MasterScreen;