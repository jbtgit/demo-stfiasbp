import React, { useState, useEffect } from 'react';
import { getMonedas, registrarSolicitud } from '../services/apiService';
import '../css/SolicitarCredito.css';

const SolicitarCredito: React.FC = () => {
    const [dni, setDni] = useState('');
    const [nombres, setNombres] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [moneda, setMoneda] = useState('');
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [datos, setDatos] = useState(false);
    const [monedas, setMonedas] = useState<{ nombre: string, valor: string }[]>([]);
    const [errors, setErrors] = useState({
        dni: '',
        nombres: '',
        celular: '',
        email: '',
        monto: '',
        plazo: ''
    });
    useEffect(() => {
        const fetchMonedas = async () => {
            const monedasData = await getMonedas();
            setMonedas(monedasData);
        };

        fetchMonedas();
        setMoneda("S");
    }, []);

    const validateForm = (): boolean => {
        let valid = true;
        const newErrors = {
            dni: '',
            nombres: '',
            celular: '',
            email: '',
            monto: '',
            plazo: ''
        };

        if (dni === '') {
            newErrors.dni = 'Ingrese el DNI del solicitante';
            valid = false;
        }

        if (nombres === '') {
            newErrors.nombres = 'Ingrese los nombres y apellidos del solicitante';
            valid = false;
        }

        if (celular === '') {
            newErrors.celular = 'Ingrese el celular del solicitante';
            valid = false;
        }

        if (email === '') {
            newErrors.email = 'Ingrese el correo electrónico del solicitante';
            valid = false;
        }

        if (monto === '') {
            newErrors.monto = 'Ingrese el monto a solicitar';
            valid = false;
        }

        if (plazo === '') {
            newErrors.plazo = 'Ingrese el plazo a solicitar';
            valid = false;
        }

        if (valid && !datos) {
            alert('Debe autorizar el uso de sus datos personales para continuar.');
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
           const data = await registrarSolicitud({
                "dni" : dni,
                "nombres" : nombres,
                "celular" : celular,
                "correo" : email,
                "moneda" : moneda,
                "monto" : monto,
                "plazo" : plazo
            });
            alert(data);
            setDni("");
            setNombres("");
            setCelular("");
            setEmail("");
            setMoneda("");
            setMonto("");
            setPlazo("");
            setDatos(false);
        }
        
    };

    return (
        <div>
            <h2>Solicitar Crédito</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dni">DNI:</label>
                <input
                    type="text"
                    id="dni"
                    name="dni"
                    maxLength={8}
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <div className="error">{errors.dni}</div>

                <label htmlFor="nombres">Nombres:</label>
                <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    maxLength={100}
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />
                <div className="error">{errors.nombres}</div>

                <label htmlFor="celular">Celular:</label>
                <input
                    type="text"
                    id="celular"
                    name="celular"
                    maxLength={9}
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <div className="error">{errors.celular}</div>

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="error">{errors.email}</div>

                <label htmlFor="moneda">Moneda:</label>
                <select
                    name="moneda"
                    id="moneda"
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}>
                    {monedas.map((moneda) => (
                        <option key={moneda.valor} value={moneda.valor}>
                            {moneda.nombre}
                        </option>
                    ))}
                </select>


                <label htmlFor="monto">Monto:</label>
                <input
                    type="text"
                    id="monto"
                    name="monto"
                    pattern="^[0-9]+(.[0-9]+)?$"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />
                <div className="error">{errors.monto}</div>

                <label htmlFor="plazo">Plazo (meses):</label>
                <input
                    type="text"
                    id="plazo"
                    name="plazo"
                    maxLength={3}
                    value={plazo}
                    onChange={(e) => setPlazo(e.target.value)}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <div className="error">{errors.plazo}</div>

                <label style={{ fontWeight: 'normal' }}>
                    <input
                        type="checkbox"
                        id="datos"
                        name="datos"
                        checked={datos}
                        onChange={(e) => setDatos(e.target.checked)}
                    />{' '}
                    Autorizo el uso de mis datos personales
                </label>

                <input type="submit" value="Solicitar" />
            </form>
        </div>
    );
};

export default SolicitarCredito;