import { Prisma, Cliente, Vehiculo, Alquiler, PrismaClient } from '@Prisma/client';
const prisma = new PrismaClient();

// Leer un cliente por ID
export const getClienteById = async (clienteId: number): Promise<Cliente | null> => {
  const cliente = await prisma.cliente.findUnique({
    where: { id: clienteId },
  });
  return cliente;
};

// Leer un vehículo por ID
export const getVehiculoById = async (vehiculoId: number): Promise<Vehiculo | null> => {
  const vehiculo = await prisma.vehiculo.findUnique({
    where: { id: vehiculoId },
  });
  return vehiculo;
};

// Leer un alquiler por ID
export const getAlquilerById = async (alquilerId: number): Promise<Alquiler | null> => {
  const alquiler = await prisma.alquiler.findUnique({
    where: { id: alquilerId },
    include: { cliente: true, vehiculo: true },
  });
  return alquiler;
};

// Ejemplo de uso
const cliente = await getClienteById(1);
const vehiculo = await getVehiculoById(1);
const alquiler = await getAlquilerById(1);

console.log('Cliente:', cliente);
console.log('Vehículo:', vehiculo);
console.log('Alquiler:', alquiler);
