import { prisma } from '../config/database.js';

// REPOSITÓRIO de Categoria — a ÚNICA camada que conversa com o Prisma.
// Implemente os métodos que o service vai precisar:
//   - listar todas as categorias;
//   - buscar uma categoria por id (usado para checar se a categoria existe);
//   - criar uma categoria.
// Dica: use `prisma.categoria.*`. Tudo é assíncrono.
export class CategoriasRepositoryPrisma {
  // TODO: implemente os métodos descritos acima.

  async criar(payload) {
    const categoria = await prisma.categoria.create({
      data: payload,
    });
    return categoria
  }

  async buscarPorId(id) {
    return prisma.categoria.findUnique({where:{id}});
  }

  async lsitar() {
    return prisma.categoria.findMany();
  }
}