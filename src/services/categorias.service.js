import { AppError } from '../utils/appError.js';
import { listar } from '../repositories/categorias.repository.prisma.js'

// SERVIÇO de Categoria — REGRAS DE NEGÓCIO.
// Lance `new AppError(mensagem, status)` quando uma regra for violada.
//
// Regras:
//   - o nome da categoria é OBRIGATÓRIO (ex.: 400 se faltar).
// Métodos: criar e listar.
export class CategoriasService {
  constructor(categoriasRepository) {
    this.repo = categoriasRepository;
  }

  async criar(payload) {
    const jaExiste = this.categoriasRepository.categoria();

    if (jaExiste) {
      throw new AppError("Erro: Esta categoria já existe.", 409);
    }
  }

  async listar() {
    return listar();
  }

  // TODO: criar(dados), listar().
}
