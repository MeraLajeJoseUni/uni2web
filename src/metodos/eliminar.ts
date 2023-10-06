import { Alquiler, Cliente, PrismaClient, Vehiculo } from "@Prisma/client";
const prisma = new PrismaClient();

// Eliminar un cliente por ID
export const deleteCliente = async (clienteId: number): Promise<Cliente | null> => {
    const cliente = await prisma.cliente.delete({
      where: { id: clienteId },
    });
    return cliente;
  };
  
  // Eliminar un vehículo por ID
export const deleteVehiculo = async (vehiculoId: number): Promise<Vehiculo | null> => {
    const vehiculo = await prisma.vehiculo.delete({
      where: { id: vehiculoId },
    });
    return vehiculo;
  };
  
  // Eliminar un alquiler por ID
export const deleteAlquiler = async (alquilerId: number): Promise<Alquiler | null> => {
    const alquiler = await prisma.alquiler.delete({
      where: { id: alquilerId },
    });
    return alquiler;
  };
  
  // Ejemplo de uso
  const deletedCliente = await deleteCliente(1);
  const deletedVehiculo = await deleteVehiculo(1);
  const deletedAlquiler = await deleteAlquiler(1);
  
  console.log('Cliente eliminado:', deletedCliente);
  console.log('Vehículo eliminado:', deletedVehiculo);
  console.log('Alquiler eliminado:', deletedAlquiler);
  