import { Prisma, Cliente, Vehiculo, Alquiler, PrismaClient } from '@Prisma/client';
const prisma = new PrismaClient();

// Actualizar datos de un cliente por ID
export const updateCliente = async (clienteId: number, newData: Prisma.ClienteUpdateInput): Promise<Cliente | null> => {
    const cliente = await prisma.cliente.update({
      where: { id: clienteId },
      data: newData,
    });
    return cliente;
  };
  
  // Actualizar datos de un vehículo por ID
export const updateVehiculo = async (vehiculoId: number, newData: Prisma.VehiculoUpdateInput): Promise<Vehiculo | null> => {
    const vehiculo = await prisma.vehiculo.update({
      where: { id: vehiculoId },
      data: newData,
    });
    return vehiculo;
  };
  
  // Actualizar datos de un alquiler por ID
export const updateAlquiler = async (
    alquilerId: number,
    newData: Prisma.AlquilerUpdateInput
  ): Promise<Alquiler | null> => {
    const alquiler = await prisma.alquiler.update({
      where: { id: alquilerId },
      data: newData,
    });
    return alquiler;
  };
  
  // Ejemplo de uso
  const updatedCliente = await updateCliente(1, { nombre: 'Nuevo Nombre' });
  const updatedVehiculo = await updateVehiculo(1, { marca: 'Nueva Marca' });
  const updatedAlquiler = await updateAlquiler(1, { fechaInicio: new Date() });
  
  console.log('Cliente actualizado:', updatedCliente);
  console.log('Vehículo actualizado:', updatedVehiculo);
  console.log('Alquiler actualizado:', updatedAlquiler);
  