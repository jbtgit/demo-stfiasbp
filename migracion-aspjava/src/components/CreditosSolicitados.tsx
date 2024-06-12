import React, { useEffect, useState } from 'react';
import { getSolicitudes } from '../services/apiService';
import '../css/styles.css';

interface Solicitud {
    dni: string;
    nombre: string;
    celular: string;
    email: string;
    monto: string;
    plazo: string;
}

const CreditosSolicitados: React.FC = () => {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSolicitudes = async () => {
            try {
                const data = await getSolicitudes();
                setSolicitudes(data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching solicitudes');
                setLoading(false);
            }
        };

        fetchSolicitudes();
    }, []);

    if (loading) {
        return <div className="content">Cargando...</div>;
    }

    if (error) {
        return <div className="content">{error}</div>;
    }

    return (
        <div className="content">
            <h2>Créditos Solicitados</h2>
            <form method="post" action="listasolicitudes.asp">
                <table>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombres y Apellidos</th>
                            <th>Celular</th>
                            <th>Email</th>
                            <th>Monto</th>
                            <th>Plazo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solicitudes.map((solicitud, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td>{solicitud.dni}</td>
                                <td>{solicitud.nombre}</td>
                                <td>{solicitud.celular}</td>
                                <td>{solicitud.email}</td>
                                <td>{solicitud.monto}</td>
                                <td>{solicitud.plazo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CreditosSolicitados;