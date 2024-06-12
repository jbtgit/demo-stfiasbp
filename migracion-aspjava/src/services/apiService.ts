import axios from 'axios';

const API_URL = 'https://api.example.com'; // Reemplaza con la URL de tu API

export const getSolicitudes = async () => {
    try {
        /*
        const response = await axios.get(`${API_URL}/solicitudes`);
        return response.data;
        */

        const solicitudes = [
            { dni: '12345678', nombre: 'Juan Pérez', celular: '987654321', email: 'juan@example.com', monto: '1000', plazo: '12 meses' },
            { dni: '87654321', nombre: 'María López', celular: '123456789', email: 'maria@example.com', monto: '2000', plazo: '24 meses' },
            // Agregar más datos según sea necesario
        ];

        return solicitudes;


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
export const registrarSolicitud = async (solicitud: any) => {
    // Aquí puedes hacer una llamada a una API real
    console.log('Solicitud registrada:', solicitud);
    return { success: true };
};