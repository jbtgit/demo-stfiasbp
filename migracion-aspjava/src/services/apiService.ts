import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Reemplaza con la URL de tu API

interface Solicitud{
    dni: string;
    nombres: string;
    celular: string;
    correo: string;
    moneda: string;
    monto: string;
    plazo: string;
  }

export const getSolicitudes = async () => {
    try {
        
        const response = await axios.get(`${API_URL}/solicitudes`);
        return response.data;

    } catch (error) {
        console.error('Error fetching solicitudes:', error);
        throw error;
    }
};

export const getMonedas = async () => {
    return [
        { nombre: 'Soles', valor: 'S' },
        { nombre: 'Dólares', valor: 'D' }
    ];
};

// Simulación de un servicio para registrar la solicitud
export const registrarSolicitud = async (solicitud:Solicitud) => {

    try {
        const response = await axios.post(`${API_URL}/solicitudes`, solicitud);
        return response.data;
      } catch (error) {
        throw new Error('Error al registrar la solicitud');
      }
};