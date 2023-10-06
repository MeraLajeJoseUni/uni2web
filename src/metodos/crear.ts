import { Prisma, Cliente, Vehiculo, Alquiler, PrismaClient } from '@Prisma/client';
const prisma = new PrismaClient();

// Crear un nuevo cliente
export const createCliente = async (nombre: string, email: string, telefono: string)=>{
    const cliente = await prisma.cliente.create({
        data:{
            nombre: 'Fresco Solo',
            email: 'frescosolojugoso@gmail.com',
            telefono: '097543882',
        }
      });
    };
    
export const createVehiculo = async (marca: string, anio: string, tipo: string, modelo: string)=>{
      const vehiculo = await prisma.vehiculo.create({
        data:{
            marca: 'Toyota',
            anio: '2023',
            tipo: 'Camioneta',
            modelo: 'Hilux',
        }
    });
};
    
export const createAlquiler = async (fechaInicio: Date, fechaFin: Date, clienteId: number, vehiculoId: number )=>{
    const alquiler = await prisma.alquiler.create({
        data:{
            fechaInicio: '2023-10-05t12:00Z',
            fechaFin: '2023-10-07t12:00Z',
            clienteId: clienteId,
            vehiculoId: vehiculoId,
        }
    });
};
    

  
