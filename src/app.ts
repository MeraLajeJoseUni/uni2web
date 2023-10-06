import { createSecureServer } from 'http2';
//import {envs} from './config/plugins/envs.plugins'
import { PrismaClient, Cliente, Vehiculo, Alquiler} from '@Prisma/client';
import { createCliente } from './metodos/crear';  
const prisma = new PrismaClient();


const createAlquiler=async()=>{
    const cliente = await prisma.cliente.create({
        data:{
            nombre: 'Fresco Solo',
            email: 'frescosolojugoso@gmail.com',
            telefono: '097543882',
        }
    })
    console.log(cliente);

    const vehiculo = await prisma.vehiculo.create({
        data:{
            marca: 'Toyota',
            anio: '2023',
            tipo: 'Camioneta',
            modelo: 'Hilux',
        }
    })
    console.log(vehiculo);

    const alquiler = await prisma.alquiler.create({
        data:{
            fechaInicio: '2023-10-05t12:00Z',
            fechaFin: '2023-10-07t12:00Z',
            clienteId: cliente.id,
            vehiculoId: vehiculo.id,
        }
    })
    console.log(alquiler);
}




